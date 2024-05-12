import {IsUUID} from "class-validator";

export class GetAllBookPartsDto {
    @IsUUID(undefined)
    id: string;
}
