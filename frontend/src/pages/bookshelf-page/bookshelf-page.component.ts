import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';
import { IBook } from '../../entities/Book/model/book.interface';
import { IBookResponse } from '../main-page/model/types/dto/get-books.response-dto';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GetBooksService } from './model/services/get-books.service';

@Component({
    selector: 'app-bookshelf-page',
    templateUrl: './bookshelf-page.component.html',
    styleUrl: './bookshelf-page.component.scss'
})
export class BookshelfPageComponent implements OnInit {
    public books: Observable<IBook[]>;
    private _books: BehaviorSubject<IBookResponse[]> = new BehaviorSubject<IBook[]>([]);
    public name: string = '';

    constructor(
        private _route: ActivatedRoute,
        private _booksService: GetBooksService,
        private _cdr: ChangeDetectorRef,
    ) {
        this.books = this._books.asObservable();
    }

    public ngOnInit(): void {
        this._booksService.getAllBooks()
            .pipe(
                filter(res => res.ok),
                tap(res => {
                    if (res.body) {
                        console.log(res.body)
                        this.name = res.body.firstName;
                        this._books.next(res.body.favourite_books);
                        this._cdr.detectChanges();
                    }
                }),
            ).subscribe();
    }
}
