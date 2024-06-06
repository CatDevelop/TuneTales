import {IsInt, IsOptional, IsString} from "class-validator";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";

export class CreateBookDto {
    @IsString()
    @ApiProperty({description: "Название книги"})
    name: string;

    @IsOptional()
    @IsString()
    @ApiPropertyOptional({description: "Описание книги"})
    description?: string;

    @IsInt()
    @ApiProperty({description: "Дата публикации книги"})
    publicationYear: number;

    @IsString()
    @ApiProperty({description: "Ссылка на изображение книги"})
    imageSrc: string;

    @IsOptional()
    @IsString({each: true})
    @ApiProperty({description: "ID авторов книги"})
    authors?: string[];

    @IsOptional()
    @IsString({each: true})
    @ApiProperty({description: "ID дикторов аудиокниги"})
    speakers?: string[];

    @IsOptional()
    @IsString({each: true})
    @ApiProperty({description: "ID жанров книги"})
    genres?: string[];
}
