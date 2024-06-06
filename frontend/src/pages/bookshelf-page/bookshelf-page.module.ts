import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookshelfPageComponent } from './bookshelf-page.component';
import { BookshelfPageRoutingModule } from './bookshelf-page-routing.module';
import { CardFeedModule } from '../../features/card-feed/card-feed.module';
import { GetBooksService } from './model/services/get-books.service';

@NgModule({
    declarations: [
        BookshelfPageComponent
    ],
    imports: [
        CommonModule,
        BookshelfPageRoutingModule,
        CardFeedModule
    ],
    exports: [
        BookshelfPageComponent,
    ],
    providers: [
        GetBooksService
    ]
})

export class BookshelfPageModule { }
