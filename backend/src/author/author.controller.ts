import {Body, Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import {AuthorService} from './author.service';
import {CreateAuthorDto} from './dto/create-author.dto';
import {GetAuthorDto} from "./dto/get-author.dto";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {AdminGuard} from "../guards/admin.guard";
import {ApiBearerAuth, ApiBody, ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiTags('author')
@Controller('author')
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {
    }

    @ApiOperation({summary: "АДМИН Создание автора книг"})
    @ApiBody({
        type: CreateAuthorDto,
        examples: {
            a: {
                summary: "Создание автора книг",
                value: {
                    "firstName": "Марк",
                    "secondName": "Твен",
                    "description": "Марк Твен – американский писатель, журналист и общественный деятель. Его творчество охватывает множество жанров: юмор, сатиру, философскую фантастику, публицистику. Марк Твен (настоящее имя писателя – Сэмюэл Лэнгхорн Клеменс) родился 30 ноября 1835 года во Флориде, штат Миссури. Его семья была небогатой, а со смертью отца в 1847 году ее материальное положение значительно ухудшилось. Чтобы помочь родным, мальчик стал учеником наборщика и работал в типографии, но мечтал стать моряком.",
                    "imageSrc": "https://avatars.dzeninfra.ru/get-zen_doc/5255669/pub_60ee683d7fcf347863cf6edb_60ee685f455e4253e0944ded/scale_1200"
                } as CreateAuthorDto
            }
        }
    })
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
