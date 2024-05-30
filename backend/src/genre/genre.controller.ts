import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {GenreService} from './genre.service';
import {CreateGenreDto} from './dto/create-genre.dto';
import {UpdateGenreDto} from './dto/update-genre.dto';
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {AdminGuard} from "../guards/admin.guard";
import {DeleteGenreDto} from "./dto/delete-genre.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('genre')
@Controller('genre')
export class GenreController {
    constructor(private readonly genreService: GenreService) {
    }

    @Post()
    @UseGuards(JwtAuthGuard, AdminGuard)
    create(@Body() createGenreDto: CreateGenreDto) {
        return this.genreService.create(createGenreDto);
    }

    @Get()
    findAll() {
        return this.genreService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.genreService.findOne(id);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, AdminGuard)
    remove(@Param() deleteGenreDto: DeleteGenreDto) {
        return this.genreService.remove(deleteGenreDto.id);
    }
}
