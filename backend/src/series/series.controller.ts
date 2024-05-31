import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {SeriesService} from './series.service';
import {CreateSeriesDto} from './dto/create-series.dto';
import {UpdateSeriesDto} from './dto/update-series.dto';
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {AdminGuard} from "../guards/admin.guard";
import {ApiBearerAuth, ApiBody, ApiOperation, ApiTags} from "@nestjs/swagger";
import {CreateGenreDto} from "../genre/dto/create-genre.dto";

@ApiTags('series')
@Controller('series')
export class SeriesController {
    constructor(private readonly seriesService: SeriesService) {
    }

    @ApiOperation({summary: "АДМИН Создание новой серии книг"})
    @ApiBody({
        type: CreateSeriesDto,
        examples: {
            a: {
                summary: "Создание серии книг",
                value: {
                    "name": "Бестселлеры Марка Твена",
                } as CreateSeriesDto
            }
        }
    })
    @ApiBearerAuth()
    @Post()
    @UseGuards(JwtAuthGuard, AdminGuard)
    create(@Body() createSeriesDto: CreateSeriesDto) {
        return this.seriesService.create(createSeriesDto);
    }

    @ApiOperation({summary: "Получение всех серий книг"})
    @ApiBearerAuth()
    @Get()
    @UseGuards(JwtAuthGuard)
    findAll() {
        return this.seriesService.findAll();
    }

    @ApiOperation({summary: "Получение информации о серии книг"})
    @ApiBearerAuth()
    @Get(':id')
    @UseGuards(JwtAuthGuard)
    findOne(@Param('id') id: string) {
        return this.seriesService.findOne(id);
    }

    @ApiOperation({summary: "АДМИН Обновление информации о серии книг"})
    @ApiBody({
        type: UpdateSeriesDto,
        examples: {
            a: {
                summary: "Обновление серии книг",
                value: {
                    "name": "Бестселлеры Квентина Тарантино",
                } as UpdateSeriesDto
            }
        }
    })
    @ApiBearerAuth()
    @Patch(':id')
    @UseGuards(JwtAuthGuard, AdminGuard)
    update(@Param('id') id: string, @Body() updateSeriesDto: UpdateSeriesDto) {
        return this.seriesService.update(id, updateSeriesDto);
    }

    @ApiOperation({summary: "АДМИН Удаление серии книг"})
    @ApiBearerAuth()
    @Delete(':id')
    @UseGuards(JwtAuthGuard, AdminGuard)
    remove(@Param('id') id: string) {
        return this.seriesService.remove(id);
    }
}
