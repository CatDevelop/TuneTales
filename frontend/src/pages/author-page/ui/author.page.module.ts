import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorPage } from './author.page';
import { AuthorInfoModule } from '../../../widgets/author-info/author-info.module';
import { AuthorService } from '../../../entities/Author/services/author.service';
import { TuiLetModule } from '@taiga-ui/cdk';

@NgModule({
    declarations: [
        AuthorPage
    ],
    imports: [
        CommonModule,
        AuthorInfoModule,
        TuiLetModule
    ],
    exports: [
        AuthorPage,
    ],
    providers: [AuthorService]
})
export class AuthorPageModule {
}
