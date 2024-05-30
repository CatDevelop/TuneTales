import {Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards} from '@nestjs/common';
import {AuthorService} from './author.service';
import {CreateAuthorDto} from './dto/create-author.dto';
import {UpdateAuthorDto} from './dto/update-author.dto';
import {GetAuthorDto} from "./dto/get-author.dto";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {AdminGuard} from "../guards/admin.guard";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('author')
@Controller('author')
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {
    }

    @Post()
    @UseGuards(JwtAuthGuard, AdminGuard)
    create(@Body() createAuthorDto: CreateAuthorDto) {
        return this.authorService.create(createAuthorDto);
    }


    @Get(':id')
    findOne(@Param() getAuthorDto: GetAuthorDto) {
        return this.authorService.findOne(getAuthorDto.id);
    }


    @Delete(':id')
    @UseGuards(JwtAuthGuard, AdminGuard)
    remove(@Param('id') id: string) {
        return this.authorService.remove(id);
    }
}
