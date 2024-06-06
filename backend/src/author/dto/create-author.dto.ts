import {IsOptional, IsString} from "class-validator";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";

export class CreateAuthorDto {
    @IsString()
    @ApiProperty({
        description: 'Имя автора',
    })
    firstName: string;

    @IsOptional()
    @IsString()
    @ApiPropertyOptional({
        description: 'Фамилия автора',
    })
    secondName?: string;

    @IsOptional()
    @IsString()
    @ApiPropertyOptional({
        description: 'Отчество автора',
    })
    lastName?: string;

    @IsOptional()
    @IsString()
    @ApiPropertyOptional({
        description: 'Описание автора',
    })
    description?: string;

    @IsString()
    @ApiProperty({
        description: 'Ссылка на изображение профиля',
    })
    imageSrc: string;
}
