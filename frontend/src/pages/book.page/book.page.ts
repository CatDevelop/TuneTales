import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-book.page',
    templateUrl: './book.page.html',
    styleUrl: './book.page.scss'
})
export class BookPage {

}
