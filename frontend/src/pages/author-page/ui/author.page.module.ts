import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorPage } from './author.page';
import { AuthorPageService } from '../model/services/author.page.service';
import { AuthorInfoModule } from '../../../widgets/author-info/author-info.module';

@NgModule({
    declarations: [
        AuthorPage
    ],
    imports: [
        CommonModule,
        AuthorInfoModule
    ],
    exports: [
        AuthorPage,
    ],
    providers: [AuthorPageService]
})
export class AuthorPageModule {
}
