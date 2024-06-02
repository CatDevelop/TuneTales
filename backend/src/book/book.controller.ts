import {Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards} from '@nestjs/common';
import {BookService} from './book.service';
import {CreateBookDto} from './dto/create-book.dto';
import {GetBookDto} from "./dto/get-book.dto";
import {AdminGuard} from "../guards/admin.guard";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {DeleteBookDto} from "./dto/delete-book.dto";
import {ChangeFavoriteBookDto} from "./dto/change-favorite-book.dto";
import {ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiTags} from "@nestjs/swagger";

@ApiTags('book')
@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {
    }

    @ApiOperation({summary: "АДМИН Создание новой книги"})
    @ApiBody({
        type: CreateBookDto,
        examples: {
            a: {
                summary: "Создание книги",
                value: {
                    "name": "Приключения Тома Сойера",
                    "description": "В книге о приключениях Тома Сойера писатель с большим мастерством нарисовал жизнь американского провинциального городка 40-х годов XIX века. Благодаря напряженному сюжету и блестящему юмору эта книга горячо любима читателями всего мира.",
                    "publicationYear": 1876,
                    "imageSrc": "https://cv3.litres.ru/pub/c/cover_250/129935.webp",
                    "authors": ["23b73218-b66d-42db-861d-091b0fb12488"],
                    "speakers": [],
                    "genres": []
                } as CreateBookDto
            }
        }
    })
    @ApiBearerAuth()
    @Post()
    @UseGuards(JwtAuthGuard, AdminGuard)
    create(@Body() createBookDto: CreateBookDto) {
        return this.bookService.create(createBookDto);
    }

    @ApiOperation({
        summary: "Получение всех книг + поиск",
        description: "Возвращает все книги, если есть поисковый запрос - сначала выводятся книги с подходящим названием, затем - с автором"
    })
    @ApiQuery({
        name: "search",
        description: "Поисковый запрос",
        required: false,
        type: String
    })
    @Get()
    findAll(@Query("search") search: string | null): Promise<GetBookDto[]> {
        return this.bookService.findAll(search);
    }

    @ApiOperation({summary: "Получение рекомендованных книг (Рандомные)"})
    @ApiQuery({
        name: "count",
        description: "Количество книг",
        required: false,
        type: Number
    })
    @ApiBearerAuth()
    @Get('recommendations')
    findRandom(@Query("count") count: number) {
        return this.bookService.findRandom(count || 10);
    }

    @ApiOperation({summary: "Получение информации о книге"})
    @ApiBearerAuth()
    @Get(':id')
    @UseGuards(JwtAuthGuard)
    findOne(@Param() getBookDto: GetBookDto, @Req() req) {
        return this.bookService.findOne(getBookDto.id, req.user.id);
    }

    @ApiOperation({summary: "АДМИН Удаление книги"})
    @ApiBearerAuth()
    @Delete(':id')
    @UseGuards(JwtAuthGuard, AdminGuard)
    remove(@Param() deleteBookDto: DeleteBookDto) {
        return this.bookService.remove(deleteBookDto.id);
    }

    @ApiOperation({summary: "Добавление/удаление книги из избранных"})
    @ApiBearerAuth()
    @Patch('favorite/:id')
    @UseGuards(JwtAuthGuard)
    changeFavorite(@Param() changeFavoriteBookDto: ChangeFavoriteBookDto, @Req() req) {
        return this.bookService.changeFavorite(changeFavoriteBookDto.id, req.user?.id);
    }
}
