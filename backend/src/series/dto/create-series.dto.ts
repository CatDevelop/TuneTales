import {IsString} from "class-validator";

export class CreateSeriesDto {
    @IsString()
    name: string;
}
