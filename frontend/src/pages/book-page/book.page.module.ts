import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookPageRoutingModule } from './book.page-routing.module';
import { BookPage } from './book.page';
import { BookService } from '../../entities/Book/services/book.service';
import {TuiButtonModule, TuiLinkModule, TuiLoaderModule} from '@taiga-ui/core';
import { CardSliderModule } from '../../features/card-slider/card-slider.module';
import { MainPageService } from '../main-page/model/services/main.page.service';
import { SeriesService } from '../../entities/Series/services/series.service';
import {TuiLetModule} from "@taiga-ui/cdk";


@NgModule({
    declarations: [
        BookPage
    ],
    imports: [
        CommonModule,
        BookPageRoutingModule,
        TuiButtonModule,
        CardSliderModule,
        TuiLinkModule,
        TuiLetModule,
        TuiLoaderModule
    ],
    exports: [
        BookPage,
    ],
    providers: [
        BookService,
        MainPageService,
        SeriesService
    ]
})
export class BookPageModule { }
