import {Module} from '@nestjs/common';
import {AuthorService} from './author.service';
import {AuthorController} from './author.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Author} from "./entities/author.entity";
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import {User} from "../user/entities/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Author, User])],
    controllers: [AuthorController],
    providers: [AuthorService, UserService, JwtService],
})
export class AuthorModule {
}
