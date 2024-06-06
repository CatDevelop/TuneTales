import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateGenreDto} from './dto/create-genre.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Genre} from "./entities/genre.entity";
import {Repository} from "typeorm";

@Injectable()
export class GenreService {
    constructor(
        @InjectRepository(Genre)
        private readonly genreRepository: Repository<Genre>,
    ) {
    }

    async isCreate(id: string) {
        const genre = await this.genreRepository.findOneBy({id})
        return !!genre;
    }

    async create(createGenreDto: CreateGenreDto) {
        const isGenreExist = await this.genreRepository.existsBy({name: createGenreDto.name})

        if (isGenreExist)
            throw new BadRequestException("The genre already exist!");

        const newGenre = {
            name: createGenreDto.name
        };

        const res = await this.genreRepository.save(newGenre);
        return {genreID: res.id}
    }

    async findAll() {
        return await this.genreRepository.find({
            relations: {
                books: {
                    authors: true,
                    speakers: true
                }
            }
        });
    }

    async findOne(id: string) {
        if (!await this.isCreate(id))
            throw new NotFoundException("Genre not found!")

        return await this.genreRepository.findOne({
            where: {id},
            relations: {
                books: {
                    authors: true,
                    speakers: true
                }
            }
        })
    }

    async remove(id: string) {
        const genre = await this.genreRepository.findOneBy({id})

        if (!genre)
            throw new NotFoundException("Genre not found!")

        await this.genreRepository.delete(id);
        return;
    }
}
