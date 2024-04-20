import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {BookService} from './book.service';
import {CreateBookDto} from './dto/create-book.dto';
import {UpdateBookDto} from './dto/update-book.dto';
import {GetBookDto} from "./dto/get-book.dto";
import {AdminGuard} from "../guards/admin.guard";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {DeleteBookDto} from "./dto/delete-book.dto";

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {
    }

    @Post()
    @UseGuards(JwtAuthGuard, AdminGuard)
    @UsePipes(new ValidationPipe())
    create(@Body() createBookDto: CreateBookDto) {
        return this.bookService.create(createBookDto);
    }

    @Get()
    findAll() {
        return this.bookService.findAll();
    }

    @Get(':id')
    @UsePipes(new ValidationPipe())
    findOne(@Param() getBookDto: GetBookDto) {
        return this.bookService.findOne(getBookDto.id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
        return this.bookService.update(+id, updateBookDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, AdminGuard)
    @UsePipes(new ValidationPipe())
    remove(@Param() deleteBookDto: DeleteBookDto) {
        return this.bookService.remove(deleteBookDto.id);
    }
}
