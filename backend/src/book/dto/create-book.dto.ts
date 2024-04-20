import {IsInt, IsOptional, IsString} from "class-validator";

export class CreateBookDto {
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsInt()
    publicationYear: number;

    @IsString()
    imageSrc: string;

    @IsOptional()
    @IsString({each: true})
    authors?: string[];

    @IsOptional()
    @IsString({each: true})
    speakers?: string[];

    @IsOptional()
    @IsString({each: true})
    genres?: string[];
}
