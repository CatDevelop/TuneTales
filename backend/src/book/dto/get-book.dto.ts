import {IsUUID} from "class-validator";

export class GetBookDto {
    @IsUUID(undefined)
    id: string;
}
