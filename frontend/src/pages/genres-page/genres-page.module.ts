import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresPageRoutingModule } from './genres-page-routing.module';
import { GenresPageComponent } from './genres-page.component';
import { BookService } from '../../entities/Book/services/book.service';
import { GenreService } from '../../entities/Genre/services/genre.service';
import { CardFeedModule } from '../../features/card-feed/card-feed.module';
@NgModule({
    declarations: [
        GenresPageComponent
    ],
    imports: [
        CommonModule,
        GenresPageRoutingModule,
        CardFeedModule
    ],
    exports: [
        GenresPageComponent,
    ],
    providers: [
        BookService,
        GenreService
    ]
})
export class GenresPageModule { }
