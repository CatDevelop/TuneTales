import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AuthorPage } from './author.page';
import { AuthorPageService } from '../model/services/author.page.service';

@NgModule({
    declarations: [
        AuthorPage,
    ],
    imports: [
        CommonModule,
        NgOptimizedImage,
    ],
    exports: [
        AuthorPage,
    ],
    providers: [AuthorPageService]
})
export class AuthorPageModule {
}
