import {Body, Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import {GenreService} from './genre.service';
import {CreateGenreDto} from './dto/create-genre.dto';
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {AdminGuard} from "../guards/admin.guard";
import {DeleteGenreDto} from "./dto/delete-genre.dto";
import {ApiBearerAuth, ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiTags('genre')
@Controller('genre')
export class GenreController {
    constructor(private readonly genreService: GenreService) {
    }

    @ApiOperation({summary: "АДМИН Создание нового жанра книг"})
    @ApiBearerAuth()
    @Post()
    @UseGuards(JwtAuthGuard, AdminGuard)
    create(@Body() createGenreDto: CreateGenreDto) {
        return this.genreService.create(createGenreDto);
    }

    @ApiOperation({summary: "Получение всех жанров книг"})
    @Get()
    findAll() {
        return this.genreService.findAll();
    }

    @ApiOperation({summary: "Получение информации о жанре"})
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.genreService.findOne(id);
    }

    @ApiOperation({summary: "АДМИН Удаление жанра"})
    @ApiBearerAuth()
    @Delete(':id')
    @UseGuards(JwtAuthGuard, AdminGuard)
    remove(@Param() deleteGenreDto: DeleteGenreDto) {
        return this.genreService.remove(deleteGenreDto.id);
    }
}
