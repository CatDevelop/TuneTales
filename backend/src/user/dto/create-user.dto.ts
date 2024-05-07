import {IsEmail, IsString, MaxLength, MinLength} from "class-validator";

export class CreateUserDto {
    @IsString()
    login: string;

    @IsEmail()
    email: string;

    @MaxLength(50, {message: "First name length must be less than 50 symbols"})
    @MinLength(1, {message: "First name length must be more than 0 symbols"})
    firstName?: string;

    @MaxLength(50, {message: "Second name length must be less than 50 symbols"})
    @MinLength(1, {message: "Second name length must be more than 0 symbols"})
    secondName?: string;

    @MaxLength(50, {message: "Last name length must be less than 50 symbols"})
    @MinLength(1, {message: "Last name length must be more than 0 symbols"})
    lastName?: string;

    @MinLength(6, {message: "Password must be more than 6 symbols"})
    password: string;
}
