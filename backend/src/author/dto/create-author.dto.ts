import {IsOptional, IsString} from "class-validator";

export class CreateAuthorDto {
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    secondName?: string;

    @IsOptional()
    @IsString()
    lastName?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsString()
    imageSrc: string;
}
