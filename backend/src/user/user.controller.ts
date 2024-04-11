import {Body, Controller, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }
}
