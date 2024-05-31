import {IsUUID} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class DeleteGenreDto {
    @ApiProperty({description: "ID жанра книг"})
    @IsUUID(undefined)
    id: string;
}
