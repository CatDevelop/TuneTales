import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './main.page';
import { CardSliderModule } from '../../../features/card-slider/card-slider.module';
import { MainPageService } from '../model/services/main.page.service';
import { BookCardModule } from '../../../entities/Book/book-card.module';
import { GenreService } from '../../../entities/Genre/services/genre.service';

@NgModule({
    declarations: [
        MainPage,
    ],
    imports: [
        CommonModule,
        CardSliderModule,
        BookCardModule,
    ],
    exports: [
        MainPage,
    ],
    providers: [
        MainPageService,
        GenreService,
    ]
})
export class MainPageModule { }
