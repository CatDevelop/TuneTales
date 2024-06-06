import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateGenreDto {
    @ApiProperty({description: "Название жанра книг"})
    @IsString()
    name: string;
}
