import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';
import { IBook } from '../../entities/Book/model/book.interface';
import { IBookResponse } from '../main-page/model/types/dto/get-books.response-dto';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MainPageService } from '../main-page/model/services/main.page.service';

@Component({
    selector: 'app-recommendations-page',
    templateUrl: './recommendations-page.component.html',
    styleUrl: './recommendations-page.component.scss'
})
export class RecommendationsPageComponent implements OnInit {
    public books: Observable<IBook[]>;
    private _books: BehaviorSubject<IBookResponse[]> = new BehaviorSubject<IBook[]>([]);
    public name: string = '';

    constructor(
        private _route: ActivatedRoute,
        private _mainService: MainPageService,
        private _cdr: ChangeDetectorRef,
    ) {
        this.books = this._books.asObservable();
    }

    public ngOnInit(): void {
        this._mainService.getAllBooks()
            .pipe(
                filter(res => res.ok),
                tap(res => {
                    if (res.body) {
                        this._books.next(res.body);
                        this._cdr.detectChanges();
                    }
                }),
            ).subscribe();
    }
}
