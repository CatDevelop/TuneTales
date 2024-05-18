import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSliderComponent } from './card-slider.component';
import { BookCardModule } from '../../../../entities/Book/ui/book-card/book-card.module';
import { TuiCarouselModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';



@NgModule({
    declarations: [
        CardSliderComponent
    ],
    imports: [
        CommonModule,
        BookCardModule,
        TuiCarouselModule,
        TuiButtonModule,
    ],
    exports: [
        CardSliderComponent
    ]
})
export class CardSliderModule { }
