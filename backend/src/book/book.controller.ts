import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post, Query,
    Req,
    Res,
    UseGuards,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {BookService} from './book.service';
import {CreateBookDto} from './dto/create-book.dto';
import {GetBookDto} from "./dto/get-book.dto";
import {AdminGuard} from "../guards/admin.guard";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {DeleteBookDto} from "./dto/delete-book.dto";
import {ChangeFavoriteBookDto} from "./dto/change-favorite-book.dto";

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {
    }

    @Post()
    @UseGuards(JwtAuthGuard, AdminGuard)
    create(@Body() createBookDto: CreateBookDto) {
        return this.bookService.create(createBookDto);
    }

    @Get()
    findAll() {
        return this.bookService.findAll();
    }

    @Get('recommendations')
    findRandom(@Query("count") count: number) {
        return this.bookService.findRandom(count || 10);
    }


    @Get(':id')
    findOne(@Param() getBookDto: GetBookDto) {
        return this.bookService.findOne(getBookDto.id);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, AdminGuard)
    remove(@Param() deleteBookDto: DeleteBookDto) {
        return this.bookService.remove(deleteBookDto.id);
    }

    @Patch('favorite/:id')
    @UseGuards(JwtAuthGuard)
    changeFavorite(@Param() changeFavoriteBookDto: ChangeFavoriteBookDto, @Req() req) {
        return this.bookService.changeFavorite(changeFavoriteBookDto.id, req.user.id);
    }
}
