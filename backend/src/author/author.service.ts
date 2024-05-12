import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateAuthorDto} from './dto/create-author.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Author} from "./entities/author.entity";

@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(Author)
        private readonly authorRepository: Repository<Author>,
    ) {
    }

    async isCreate(id: string) {
        const author = await this.authorRepository.findOneBy({id})
        return !!author;
    }

    async create(createAuthorDto: CreateAuthorDto) {
        const isAuthorExist = await this.authorRepository.existsBy({
            firstName: createAuthorDto.firstName,
            secondName: createAuthorDto.secondName,
            lastName: createAuthorDto.lastName
        })

        if (isAuthorExist)
            throw new BadRequestException("The author already exist!");

        const newAuthor = {
            firstName: createAuthorDto.firstName,
            secondName: createAuthorDto.secondName,
            lastName: createAuthorDto.lastName,
            description: createAuthorDto.description,
            imageSrc: createAuthorDto.imageSrc
        };

        const res = await this.authorRepository.save(newAuthor);
        return {authorID: res.id}
    }

    async findOne(id: string) {
        if (!await this.isCreate(id))
            throw new NotFoundException("Author not found!")

        return await this.authorRepository.findOne({
                where: {id},
                relations: ["writtenBooks", "soundedBooks"]
            },
        )
    }

    async remove(id: string) {
        const author = await this.authorRepository.findOneBy({id})

        if (!author)
            throw new NotFoundException("Author not found!")

        await this.authorRepository.delete(id);
        return;
    }
}
