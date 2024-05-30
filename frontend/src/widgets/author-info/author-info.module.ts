import { NgModule } from '@angular/core';
import { AuthorInfoComponent } from './author-info.component';
import { CommonModule } from '@angular/common';
import { CardFeedModule } from '../../features/card-feed/card-feed.module';

@NgModule({
    imports: [
        CommonModule,
        CardFeedModule
    ],
    declarations: [
        AuthorInfoComponent
    ],
    exports: [
        AuthorInfoComponent
    ]
})

export class AuthorInfoModule { }
