import {IsUUID} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class GetBookDto {
    @ApiProperty({description: "ID книги"})
    @IsUUID(undefined)
    id: string;
}
