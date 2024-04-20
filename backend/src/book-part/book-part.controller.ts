import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {BookPartService} from './book-part.service';
import {CreateBookPartDto} from './dto/create-book-part.dto';
import {UpdateBookPartDto} from './dto/update-book-part.dto';
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {AdminGuard} from "../guards/admin.guard";

@Controller('book-part')
export class BookPartController {
    constructor(private readonly bookPartService: BookPartService) {
    }

    @Post()
    @UseGuards(JwtAuthGuard, AdminGuard)
    @UsePipes(new ValidationPipe())
    create(@Body() createBookPartDto: CreateBookPartDto) {
        return this.bookPartService.create(createBookPartDto);
    }

    @Get()
    findAll() {
        return this.bookPartService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.bookPartService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateBookPartDto: UpdateBookPartDto) {
        return this.bookPartService.update(+id, updateBookPartDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, AdminGuard)
    @UsePipes(new ValidationPipe())
    remove(@Param('id') id: string) {
        return this.bookPartService.remove(id);
    }
}
