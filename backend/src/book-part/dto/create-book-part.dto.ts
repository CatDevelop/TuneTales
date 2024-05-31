import {IsInt, IsString, Min} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateBookPartDto {
    @ApiProperty({description: "Название главы книги"})
    @IsString()
    name: string;

    @ApiProperty({description: "Длительность аудиозаписи главы в секундах"})
    @IsInt()
    @Min(0)
    durationSeconds: number;

    @ApiProperty({description: "Ссылка на аудиозапись главы"})
    @IsString()
    audioSrc: string;

    @ApiProperty({description: "ID книги"})
    @IsString()
    bookId: string;
}
