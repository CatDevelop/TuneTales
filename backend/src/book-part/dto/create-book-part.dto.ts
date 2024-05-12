import {IsInt, IsString, Min} from "class-validator";

export class CreateBookPartDto {
    @IsString()
    name: string;

    @IsInt()
    @Min(0)
    durationSeconds: number;

    @IsString()
    audioSrc: string;

    @IsString()
    bookId: string;
}
