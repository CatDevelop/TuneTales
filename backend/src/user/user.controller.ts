import {Body, Controller, Get, Param, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {GetBookDto} from "../book/dto/get-book.dto";
import {GetUserDto} from "./dto/get-user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get(':id')
    @UsePipes(new ValidationPipe())
    findOne(@Param() getUserDto: GetUserDto) {
        return this.userService.findOneById(getUserDto.id);
    }
}
