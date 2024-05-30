import {Body, Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import {BookPartService} from './book-part.service';
import {CreateBookPartDto} from './dto/create-book-part.dto';
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {AdminGuard} from "../guards/admin.guard";
import {GetAllBookPartsDto} from "./entities/get-all-book-parts.dto";
import {GetBookPartDto} from "./entities/get-book-part.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('book-part')
@Controller('book-part')
export class BookPartController {
    constructor(private readonly bookPartService: BookPartService) {
    }

    @Post()
    @UseGuards(JwtAuthGuard, AdminGuard)
    create(@Body() createBookPartDto: CreateBookPartDto) {
        return this.bookPartService.create(createBookPartDto);
    }

    @Get("all/:id")
    @UseGuards(JwtAuthGuard)
    findAll(@Param() getAllBookPartsDto: GetAllBookPartsDto) {
        return this.bookPartService.findAllByBook(getAllBookPartsDto.id);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    findOne(@Param() getBookPartDto: GetBookPartDto) {
        return this.bookPartService.findOne(getBookPartDto.id);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, AdminGuard)
    remove(@Param('id') id: string) {
        return this.bookPartService.remove(id);
    }
}
