import { PartialType } from '@nestjs/swagger';
import { CreateSeriesDto } from './create-series.dto';
import {IsArray, IsNotEmpty, IsOptional, IsString, IsUUID, isUUID, ValidateNested} from "class-validator";
import {Type} from "class-transformer";

export class UpdateSeriesDto extends PartialType(CreateSeriesDto) {
    @IsArray()
    @IsOptional()
    @IsUUID(undefined, { each: true })
    books: string[]
}
