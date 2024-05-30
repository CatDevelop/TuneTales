import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFeedComponent } from './ui/card-feed/card-feed.component';
import { BookCardModule } from '../../entities/Book/book-card.module';

@NgModule({
    declarations: [
        CardFeedComponent
    ],
    imports: [
        CommonModule,
        BookCardModule
    ],
    exports: [
        CardFeedComponent
    ],
})

export class CardFeedModule { }
