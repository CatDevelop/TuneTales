import {Module} from '@nestjs/common';
import {BookService} from './book.service';
import {BookController} from './book.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Book} from "./entities/book.entity";
import {BookPart} from "../book-part/entities/book-part.entity";
import {Author} from "../author/entities/author.entity";
import {Genre} from "../genre/entities/genre.entity";
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import {User} from "../user/entities/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Book, Author, BookPart, Genre, User])],
    controllers: [BookController],
    providers: [BookService, UserService, JwtService],
})
export class BookModule {
}
