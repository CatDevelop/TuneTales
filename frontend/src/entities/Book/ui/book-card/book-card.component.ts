import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBook } from '../../model/book.interface';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-book-card',
    templateUrl: './book-card.component.html',
    styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
    @Input()
    public book: IBook | undefined = undefined;

    public get authorFullName(): string {
        return this.book?.authors[0].firstName + ' ' + this.book?.authors[0].secondName;
    };

    public get bookName(): string {
        return this.book?.name ?? '';
    };
}
