import {Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards} from '@nestjs/common';
import {AuthorService} from './author.service';
import {CreateAuthorDto} from './dto/create-author.dto';
import {UpdateAuthorDto} from './dto/update-author.dto';
import {GetAuthorDto} from "./dto/get-author.dto";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {AdminGuard} from "../guards/admin.guard";
import {ApiBearerAuth, ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiTags('author')
@Controller('author')
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {
    }

    @ApiOperation({summary: "АДМИН Создание новой книги"})
    @ApiBearerAuth()
    @Post()
    @UseGuards(JwtAuthGuard, AdminGuard)
    create(@Body() createAuthorDto: CreateAuthorDto) {
        return this.authorService.create(createAuthorDto);
    }

    @ApiOperation({summary: "Получение информации об авторе"})
    @ApiBearerAuth()
    @Get(':id')
    findOne(@Param() getAuthorDto: GetAuthorDto) {
        return this.authorService.findOne(getAuthorDto.id);
    }

    @ApiOperation({summary: "АДМИН Удаление автора"})
    @ApiBearerAuth()
    @Delete(':id')
    @UseGuards(JwtAuthGuard, AdminGuard)
    remove(@Param('id') id: string) {
        return this.authorService.remove(id);
    }
}
