import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateBookDto} from './dto/create-book.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {In, Repository} from "typeorm";
import {Book} from "./entities/book.entity";
import {Author} from "../author/entities/author.entity";
import {Genre} from "../genre/entities/genre.entity";

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
        @InjectRepository(Author)
        private readonly authorRepository: Repository<Author>,
        @InjectRepository(Genre)
        private readonly genreRepository: Repository<Genre>,
    ) {
    }

    async isCreate(id: string) {
        const book = await this.bookRepository.findOneBy({id})
        return !!book;
    }

    async create(createBookDto: CreateBookDto) {
        const isBookExist = await this.bookRepository.existsBy({
            name: createBookDto.name,
            authors: {id: In(createBookDto.authors || [])}
        })

        if (isBookExist)
            throw new BadRequestException("The book already exist!");

        if ("authors" in createBookDto) {
            const existAuthorsCount = await this.authorRepository.countBy([
                ...createBookDto.authors.map(id => ({id}))
            ])

            if (createBookDto.authors.length !== 0 && existAuthorsCount !== createBookDto.authors.length)
                throw new BadRequestException("The author does not exist!");
        }

        if ("speakers" in createBookDto) {
            const existSpeakerCount = await this.authorRepository.countBy([
                ...createBookDto.speakers.map(id => ({id}))
            ])

            if (createBookDto.speakers.length !== 0 && existSpeakerCount !== createBookDto.speakers.length)
                throw new BadRequestException("The speaker does not exist!");
        }

        if ("genres" in createBookDto) {
            const existGenresCount = await this.genreRepository.countBy([
                ...createBookDto.genres.map(id => ({id}))
            ])

            if (createBookDto.genres.length !== 0 && existGenresCount !== createBookDto.genres.length)
                throw new BadRequestException("The genre does not exist!");
        }

        const newBook = {
            name: createBookDto.name,
            description: createBookDto.description,
            publicationYear: createBookDto.publicationYear,
            imageSrc: createBookDto.description,
            authors: createBookDto.authors?.map(author => ({id: author})),
            speakers: createBookDto.speakers?.map(speaker => ({id: speaker})),
            genres: createBookDto.genres?.map(genre => ({id: genre}))
        };

        const res = await this.bookRepository.save(newBook);
        return {bookID: res.id}
    }

    async findAll() {
        return await this.bookRepository.find({
            relations: {
                authors: true,
                speakers: true,
                genres: true
            }
        });
    }

    async findOne(id: string) {
        if (!await this.isCreate(id))
            throw new NotFoundException("Book not found!")

        return await this.bookRepository.findOne({
                where: {id},
                relations: ["authors", "speakers", "genres", "parts"]
            },
        )
    }

    async remove(id: string) {
        const book = await this.bookRepository.findOneBy({id})

        if (!book)
            throw new NotFoundException("Book not found!")

        await this.bookRepository.delete(id);
        return;
    }
}
