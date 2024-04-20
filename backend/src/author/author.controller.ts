import {Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards} from '@nestjs/common';
import {AuthorService} from './author.service';
import {CreateAuthorDto} from './dto/create-author.dto';
import {UpdateAuthorDto} from './dto/update-author.dto';
import {GetAuthorDto} from "./dto/get-author.dto";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {AdminGuard} from "../guards/admin.guard";

@Controller('author')
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @UseGuards(JwtAuthGuard, AdminGuard)
    create(@Body() createAuthorDto: CreateAuthorDto) {
        return this.authorService.create(createAuthorDto);
    }

    @Get()
    findAll() {
        return this.authorService.findAll();
    }

    @Get(':id')
    @UsePipes(new ValidationPipe())
    findOne(@Param() getAuthorDto: GetAuthorDto) {
        return this.authorService.findOne(getAuthorDto.id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
        return this.authorService.update(+id, updateAuthorDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, AdminGuard)
    @UsePipes(new ValidationPipe())
    remove(@Param('id') id: string) {
        return this.authorService.remove(id);
    }
}
