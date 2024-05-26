import {Module} from '@nestjs/common';
import {GenreService} from './genre.service';
import {GenreController} from './genre.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Genre} from "./entities/genre.entity";
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import {User} from "../user/entities/user.entity";
import {Book} from "../book/entities/book.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Genre, User, Book])],
    controllers: [GenreController],
    providers: [GenreService, UserService, JwtService],
})
export class GenreModule {
}