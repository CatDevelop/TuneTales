import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateBookPartDto} from './dto/create-book-part.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Book} from "../book/entities/book.entity";
import {Repository} from "typeorm";
import {BookPart} from "./entities/book-part.entity";

@Injectable()
export class BookPartService {
    constructor(
        @InjectRepository(BookPart)
        private readonly bookPartRepository: Repository<BookPart>,
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
    ) {
    }

    async isCreate(id: string) {
        const bookPart = await this.bookPartRepository.findOneBy({id})
        return !!bookPart;
    }

    async create(createBookPartDto: CreateBookPartDto) {
        const isBookPartExist = await this.bookPartRepository.existsBy({
            book: {id: createBookPartDto.bookId},
            name: createBookPartDto.name
        })

        if (isBookPartExist)
            throw new BadRequestException("The book part already exist!");

        const isBookExist = await this.bookRepository.existsBy({
            id: createBookPartDto.bookId
        })

        if (!isBookExist)
            throw new BadRequestException("The book does not exist!");

        const newBookPart = {
            name: createBookPartDto.name,
            durationSeconds: createBookPartDto.durationSeconds,
            audioSrc: createBookPartDto.audioSrc,
            book: {id: createBookPartDto.bookId}
        };

        const res = await this.bookPartRepository.save(newBookPart);
        return {bookPartID: res.id}
    }

    async findAllByBook(bookId: string) {
        return await this.bookPartRepository.find({
            where: {book: {id: bookId}}
        });
    }

    async findOne(id: string) {
        if (!await this.isCreate(id))
            throw new NotFoundException("Book part not found!")

        return await this.bookPartRepository.findOne({
                where: {id},
                relations: ["book"]
            },
        )
    }

    async remove(id: string) {
        const bookPart = await this.bookPartRepository.findOneBy({id})

        if (!bookPart)
            throw new NotFoundException("Book part not found!")

        await this.bookPartRepository.delete(id);
        return;
    }
}
