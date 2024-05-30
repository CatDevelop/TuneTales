import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModule} from "./user/user.module";
import {AuthModule} from "./auth/auth.module";
import {BookModule} from './book/book.module';
import {GenreModule} from './genre/genre.module';
import {BookPartModule} from './book-part/book-part.module';
import {AuthorModule} from './author/author.module';
import {SeriesModule} from './series/series.module';

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get("DB_HOST"),
                port: configService.get("DB_PORT"),
                username: configService.get("DB_USERNAME"),
                password: configService.get("DB_PASSWORD"),
                database: configService.get("DB_NAME"),
                synchronize: true,
                autoLoadEntities: true,
                entities: [__dirname + "/**/*.entities{.js, .ts}"]
            }),
            inject: [ConfigService]
        }),
        UserModule,
        AuthModule,
        BookModule,
        GenreModule,
        BookPartModule,
        AuthorModule,
        SeriesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
