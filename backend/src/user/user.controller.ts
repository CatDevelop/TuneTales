import {Body, Controller, Get, Post, Req, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    findOne(@Req() req) {
        return this.userService.findOneById(req.user.id);
    }
}
