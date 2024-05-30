import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAuthorResponse } from '../../pages/author-page/model/types/dto/get-author.response-dto';

@Component({
    selector: 'author-info',
    templateUrl: './author-info.component.html',
    styleUrl: './author-info.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorInfoComponent {
    @Input()
    public author: IAuthorResponse | null = null;

    constructor() {
    }
}
