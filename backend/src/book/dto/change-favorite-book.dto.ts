import {IsUUID} from "class-validator";

export class ChangeFavoriteBookDto {
    @IsUUID(undefined)
    id: string;
}
