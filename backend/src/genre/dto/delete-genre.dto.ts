import {IsUUID} from "class-validator";

export class DeleteGenreDto {
    @IsUUID(undefined)
    id: string;
}
