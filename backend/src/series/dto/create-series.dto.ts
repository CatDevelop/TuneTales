import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateSeriesDto {
    @ApiProperty({description: "Название серии книг"})
    @IsString()
    name: string;
}
