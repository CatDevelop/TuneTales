import {Body, Controller, Get, Post, Req, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {ApiBearerAuth, ApiBody, ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiTags('auth')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @ApiOperation({summary: "Регистрация нового пользователя"})
    @ApiBody({
        type: CreateUserDto,
        examples: {
            a: {
                summary: "Создание пользователя",
                value: {
                    "login": "CatDev",
                    "email": "r.maximka@mail.ru",
                    "password": "P@ssw0rd",
                    "firstName": "Максим",
                    "secondName": "Рожков",
                    "lastName": "Евгеньевич"
                } as CreateUserDto
            }
        }
    })
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @ApiOperation({summary: "Получение профиля пользователя"})
    @ApiBearerAuth()
    @Get('profile')
    @UseGuards(JwtAuthGuard)
    findOne(@Req() req) {
        return this.userService.findOneById(req.user.id);
    }
}
