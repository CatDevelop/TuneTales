import {Module} from '@nestjs/common';
import {UserService} from './user.service';
import {UserController} from './user.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {Book} from "../book/entities/book.entity";
import {Author} from "../author/entities/author.entity";
import {BookPart} from "../book-part/entities/book-part.entity";
import {Genre} from "../genre/entities/genre.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Book, Author, BookPart, Genre]),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get("JWT_SECRET"),
                signOptions: {
                    expiresIn: '30d'
                }
            }),
            inject: [ConfigService]
        }),
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {
}
