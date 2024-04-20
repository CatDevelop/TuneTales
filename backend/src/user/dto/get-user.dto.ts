import {IsUUID} from "class-validator";

export class GetUserDto {
    @IsUUID(undefined)
    id: string;
}
