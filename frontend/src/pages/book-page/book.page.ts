import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookService } from '../../entities/Book/services/book.service';
import { IGetBookResponseDto } from '../../entities/Book/model/dto/response/get-book.response-dto';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-book-page',
    templateUrl: './book.page.html',
    styleUrl: './book.page.scss'
})
export class BookPage implements OnInit {
    private _bookId: string | null = null;
    private _book$: BehaviorSubject<IGetBookResponseDto | null> = new BehaviorSubject<IGetBookResponseDto | null>(null);
    public book: Observable<IGetBookResponseDto | null>;
    constructor(
        private _route: ActivatedRoute,
        private _bookService: BookService,
    ) {
        this.book = this._book$.asObservable();
    }

    public ngOnInit(): void {
        this._route.paramMap
            .subscribe((params: ParamMap) => {
                this._bookId = params.get('bookId');
            });
        this._bookService.getBookById(this._bookId ?? '')
            .subscribe(resp => {
                if (resp.ok && resp.body) {
                    this._book$.next(resp.body);
                }
            });
    }
}
