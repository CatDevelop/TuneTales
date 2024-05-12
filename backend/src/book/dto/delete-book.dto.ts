import {IsUUID} from "class-validator";

export class DeleteBookDto {
    @IsUUID(undefined)
    id: string;
}
