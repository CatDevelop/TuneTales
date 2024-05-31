import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IBookResponse } from '../../../../pages/main-page/model/types/dto/get-books.response-dto';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-card-slider-item',
    templateUrl: './card-slider-item.component.html',
    styleUrl: './card-slider-item.component.scss'
})
export class CardSliderItemComponent {
    @Input()
    public book: IBookResponse | undefined = undefined;

    public get authorFullName(): string {
        return this.book?.authors[0].firstName + ' ' + this.book?.authors[0].secondName;
    };

    public get bookName(): string {
        return this.book?.name ?? '';
    };

    constructor(private _router: Router) {
    }

    /**
     * Редирект на страницу книги
     */
    public navigateToBook(): void {
        if (this.book) {
            this._router.navigate([`/books/${this.book.id}`]);
        }
    }
}

