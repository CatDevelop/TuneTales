import {IsUUID} from "class-validator";

export class GetBookPartDto {
    @IsUUID(undefined)
    id: string;
}
