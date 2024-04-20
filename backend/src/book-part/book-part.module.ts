import {Module} from '@nestjs/common';
import {BookPartService} from './book-part.service';
import {BookPartController} from './book-part.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {BookPart} from "./entities/book-part.entity";
import {Book} from "../book/entities/book.entity";
import {Author} from "../author/entities/author.entity";
import {Genre} from "../genre/entities/genre.entity";
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import {User} from "../user/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([BookPart, Book, Author, Genre, User])],
  controllers: [BookPartController],
  providers: [BookPartService, UserService, JwtService],
})
export class BookPartModule {}
