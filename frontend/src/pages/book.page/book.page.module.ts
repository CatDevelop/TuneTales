import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookPageRoutingModule } from './book.page-routing.module';
import { BookPage } from './book.page';


@NgModule({
    declarations: [
        BookPage
    ],
    imports: [
        CommonModule,
        BookPageRoutingModule
    ],
    exports: [
        BookPage,
    ]
})
export class BookPageModule { }
