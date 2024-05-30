import {IsOptional, IsString} from "class-validator";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";

export class LoginDto {
    @IsString()
    login: string;

    @IsString()
    password: string;
}
