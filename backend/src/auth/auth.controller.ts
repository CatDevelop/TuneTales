import {Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {AuthService} from './auth.service';
import {LocalAuthGuard} from "./guards/local-auth.guard";
import {JwtAuthGuard} from "./guards/jwt-auth.guard";
import {ApiBearerAuth, ApiBody, ApiExcludeEndpoint, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {LoginDto} from "./dto/login.dto";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('login')
    @UseGuards(LocalAuthGuard)

    @ApiOperation({summary: "Получение accessToken'a пользователя"})
    @ApiBody({
        type: LoginDto,
        examples: {
            a: {
                summary: "Авторизация",
                value: {login: "Admin", password: "Password"} as LoginDto
            }
        }
    })
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiExcludeEndpoint()
    getProfile(@Request() req) {
        return req.user;
    }
}
