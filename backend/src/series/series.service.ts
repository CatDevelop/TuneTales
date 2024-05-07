import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {UpdateSeriesDto} from './dto/update-series.dto';
import {Repository} from "typeorm";
import {CreateSeriesDto} from "./dto/create-series.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Series} from "./entities/series.entity";
import {Book} from "../book/entities/book.entity";

@Injectable()
export class SeriesService {
    constructor(
        @InjectRepository(Series)
        private readonly seriesRepository: Repository<Series>,
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
    ) {
    }

    async isCreate(id: string) {
        const series = await this.seriesRepository.findOneBy({id})
        return !!series;
    }

    async create(createSeriesDto: CreateSeriesDto) {
        const isSeriesExist = await this.seriesRepository.existsBy({
            name: createSeriesDto.name,
        })

        if (isSeriesExist)
            throw new BadRequestException("The series already exist!");

        const newSeries = {
            name: createSeriesDto.name,
        };

        const res = await this.seriesRepository.save(newSeries);
        return {seriesID: res.id}
    }

    async findAll() {
        return await this.seriesRepository.find({
            relations: {
                books: true,
            }
        });
    }

    async findOne(id: string) {
        if (!await this.isCreate(id))
            throw new NotFoundException("Book not found!")

        return await this.seriesRepository.findOne({
                where: {id},
                relations: ["books"]
            },
        )
    }

    async update(id: string, updateSeriesDto: UpdateSeriesDto) {
        const series = await this.seriesRepository.findOneBy({id})

        if (!series)
            throw new NotFoundException("Series not found!")

        if ("name" in updateSeriesDto) {
            const seriesByName = await this.seriesRepository.findOneBy({name: updateSeriesDto.name})

            if (seriesByName && updateSeriesDto.name !== series.name)
                throw new BadRequestException("Series name already exist!")
            else
                await this.seriesRepository.update(series.id, {
                    name: updateSeriesDto.name
                });
        }

        if ("books" in updateSeriesDto) {
            const booksExists = await this.bookRepository.countBy(
                updateSeriesDto.books.map(course => ({id: course}))
            )

            if (updateSeriesDto.books.length !== 0 && booksExists !== updateSeriesDto.books.length)
                throw new NotFoundException("The book does not exist!");

            await this.seriesRepository.save({
                ...series,
                books: updateSeriesDto.books.map(book => ({id: book}))
            })
            delete updateSeriesDto["books"];
        }

        return this.seriesRepository.findOne({
            where: {id},
            relations: {
                books: true
            }
        })
    }

    async remove(id: string) {
        const series = await this.seriesRepository.findOneBy({id})

        if (!series)
            throw new NotFoundException("Series not found!")

        await this.seriesRepository.delete(id);
        return;
    }
}
