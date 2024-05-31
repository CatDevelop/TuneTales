import {IsEmail, IsOptional, IsString, IsStrongPassword, MaxLength, MinLength} from "class-validator";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({description: "Логин пользователя"})
    @IsString()
    login: string;

    @ApiProperty({description: "Почта пользователя"})
    @IsEmail()
    email: string;

    @ApiProperty({description: "Имя пользователя"})
    @MaxLength(50, {message: "First name length must be less than 50 symbols"})
    @MinLength(1, {message: "First name length must be more than 0 symbols"})
    @IsString()
    firstName: string;

    @ApiProperty({description: "Фамилия пользователя"})
    @MaxLength(50, {message: "Second name length must be less than 50 symbols"})
    @MinLength(1, {message: "Second name length must be more than 0 symbols"})
    @IsString()
    secondName: string;

    @ApiPropertyOptional({description: "Отчество пользователя"})
    @MaxLength(50, {message: "Last name length must be less than 50 symbols"})
    @MinLength(1, {message: "Last name length must be more than 0 symbols"})
    @IsOptional()
    lastName?: string;

    @ApiProperty({description: "Пароль"})
    @MinLength(6, {message: "Password must be more than 6 symbols"})
    @IsStrongPassword()
    password: string;
}
