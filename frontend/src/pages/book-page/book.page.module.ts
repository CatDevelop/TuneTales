import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookPageRoutingModule } from './book.page-routing.module';
import { BookPage } from './book.page';
import { BookService } from '../../entities/Book/services/book.service';
import { TuiButtonModule } from '@taiga-ui/core';
import { CardSliderModule } from '../../features/card-slider/card-slider.module';


@NgModule({
    declarations: [
        BookPage
    ],
    imports: [
        CommonModule,
        BookPageRoutingModule,
        TuiButtonModule,
        CardSliderModule
    ],
    exports: [
        BookPage,
    ],
    providers: [BookService]
})
export class BookPageModule { }
