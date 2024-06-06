import {IsUUID} from "class-validator";

export class GetAuthorDto {
    @IsUUID()
    id: string;
}
