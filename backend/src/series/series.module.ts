import {Module} from '@nestjs/common';
import {SeriesService} from './series.service';
import {SeriesController} from './series.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Series} from "./entities/series.entity";
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import {User} from "../user/entities/user.entity";
import {Book} from "../book/entities/book.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Series, User, Book])],
    controllers: [SeriesController],
    providers: [SeriesService, UserService, JwtService],
})
export class SeriesModule {
}
