import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class LoginDto {
    @ApiProperty({description: "Логин пользователя"})
    @IsString()
    login: string;

    @ApiProperty({description: "Пароль"})
    @IsString()
    password: string;
}
