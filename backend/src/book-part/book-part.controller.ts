import {Body, Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import {BookPartService} from './book-part.service';
import {CreateBookPartDto} from './dto/create-book-part.dto';
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {AdminGuard} from "../guards/admin.guard";
import {GetAllBookPartsDto} from "./entities/get-all-book-parts.dto";
import {GetBookPartDto} from "./entities/get-book-part.dto";
import {ApiBearerAuth, ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiTags('book-part')
@Controller('book-part')
export class BookPartController {
    constructor(private readonly bookPartService: BookPartService) {
    }

    @ApiOperation({summary: "АДМИН Создание главы для книги"})
    @ApiBearerAuth()
    @Post()
    @UseGuards(JwtAuthGuard, AdminGuard)
    create(@Body() createBookPartDto: CreateBookPartDto) {
        return this.bookPartService.create(createBookPartDto);
    }

    @ApiOperation({summary: "Получение всех глав книги"})
    @ApiBearerAuth()
    @Get("all/:id")
    @UseGuards(JwtAuthGuard)
    findAll(@Param() getAllBookPartsDto: GetAllBookPartsDto) {
        return this.bookPartService.findAllByBook(getAllBookPartsDto.id);
    }

    @ApiOperation({summary: "Получение информации о главе книги"})
    @ApiBearerAuth()
    @Get(':id')
    @UseGuards(JwtAuthGuard)
    findOne(@Param() getBookPartDto: GetBookPartDto) {
        return this.bookPartService.findOne(getBookPartDto.id);
    }

    @ApiOperation({summary: "АДМИН Удаление главы книги"})
    @ApiBearerAuth()
    @Delete(':id')
    @UseGuards(JwtAuthGuard, AdminGuard)
    remove(@Param('id') id: string) {
        return this.bookPartService.remove(id);
    }
}
