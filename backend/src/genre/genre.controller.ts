import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {GenreService} from './genre.service';
import {CreateGenreDto} from './dto/create-genre.dto';
import {UpdateGenreDto} from './dto/update-genre.dto';
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {AdminGuard} from "../guards/admin.guard";
import {DeleteGenreDto} from "./dto/delete-genre.dto";

@Controller('genre')
export class GenreController {
    constructor(private readonly genreService: GenreService) {
    }

    @Post()
    @UseGuards(JwtAuthGuard, AdminGuard)
    @UsePipes(new ValidationPipe())
    create(@Body() createGenreDto: CreateGenreDto) {
        return this.genreService.create(createGenreDto);
    }

    @Get()
    findAll() {
        return this.genreService.findAll();
    }

    @Get(':id')
    @UsePipes(new ValidationPipe())
    findOne(@Param('id') id: string) {
        return this.genreService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
        return this.genreService.update(+id, updateGenreDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, AdminGuard)
    @UsePipes(new ValidationPipe())
    remove(@Param() deleteGenreDto: DeleteGenreDto) {
        return this.genreService.remove(deleteGenreDto.id);
    }
}
