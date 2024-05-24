import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSliderComponent } from './ui/card-slider/card-slider.component';
import { BookCardModule } from '../../entities/Book/book-card.module';
import { TuiCarouselModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { CardSliderItemComponent } from './ui/card-slider-item/card-slider-item.component';

@NgModule({
    declarations: [
        CardSliderComponent,
        CardSliderItemComponent
    ],
    imports: [
        CommonModule,
        BookCardModule,
        TuiCarouselModule,
        TuiButtonModule,
    ],
    exports: [
        CardSliderComponent,
        CardSliderItemComponent
    ],
})
export class CardSliderModule { }
