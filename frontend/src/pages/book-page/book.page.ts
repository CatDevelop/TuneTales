import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BehaviorSubject, filter, Observable, tap, switchMap, } from 'rxjs';
import { BookService } from '../../entities/Book/services/book.service';
import { IGetBookResponseDto } from '../../entities/Book/model/dto/response/get-book.response-dto';
import { MainPageService } from '../main-page/model/services/main.page.service';
import { IBook } from '../../entities/Book/model/book.interface';
import { IBookResponse } from '../main-page/model/types/dto/get-books.response-dto';
import { DataService } from '../../shared/lib/playerData.service';
import { AverageColorService } from '../../features/Player/lib/averageColor.service';
import { ChangeDetectorRef } from '@angular/core';
import { SeriesService } from '../../entities/Series/services/series.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-book-page',
    templateUrl: './book.page.html',
    styleUrl: './book.page.scss'
})
export class BookPage implements OnInit {
    public backgroundColor: string = '#f9fdff';
    public imageUrl: string = '';
    // public favotiteButton: boolean = false;
    public favotiteButton: Observable<boolean>;
    private _favotiteButton: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    // private _bookId: string | null = null;
    private _bookId: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
    public bookId: Observable<string | null>;
    private _book$: BehaviorSubject<IGetBookResponseDto | null> = new BehaviorSubject<IGetBookResponseDto | null>(null);
    public book: Observable<IGetBookResponseDto | null>;

    public books: Observable<IBook[]>;
    private _books: BehaviorSubject<IBookResponse[]> = new BehaviorSubject<IBook[]>([]);
    public series: Observable<IBook[]>;
    private _series: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>([]);


    public get authorName(): string {
        let result: string = '';
        this.book
            .subscribe(
                data => {
                    if (data && data.authors) {
                        result = data?.authors[0].firstName + ' ' + data?.authors[0].secondName;
                    }
                }
            );

        return result;
    }

    public get authorId(): string {
        let result: string = '';
        this.book
            .subscribe(
                data => {
                    if (data && data.authors) {
                        result = data?.authors[0].id;
                    }
                }
            );

        return result;
    }

    public get speakerId(): string {
        let result: string = '';
        this.book
            .subscribe(
                data => {
                    if (data && data.speakers) {
                        result = data?.speakers[0].id;
                    }
                }
            );

        return result;
    }

    public get speakerName(): string {
        let result: string = '';
        this.book
            .subscribe(
                data => {
                    if (data && data.speakers) {
                        result = data?.speakers[0].firstName + ' ' + data?.speakers[0].secondName;
                    }
                }
            );

        return result;
    }

    public get genre(): string {
        let result: string = '';
        this.book
            .subscribe(
                data => {
                    if (data && data.genres) {
                        result = data?.genres[0].name;
                    }
                }
            );

        return result;
    }

    public get duration(): number {
        let result: number = 0;
        this.book
            .subscribe(
                data => {
                    if (data && data.parts) {
                        // @ts-ignore
                        data.parts.forEach(part => {
                            result += part.durationSeconds;
                        });
                    }
                }
            );

        return Math.floor(result / 60);
    }

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _bookService: BookService,
        private _mainService: MainPageService,
        private _seriesService: SeriesService,
        private _dataService: DataService,
        private _averageColor: AverageColorService,
        private _cdr: ChangeDetectorRef
    ) {
        this.book = this._book$.asObservable();
        this.books = this._books.asObservable();
        this.series = this._series.asObservable();
        this.bookId = this._bookId.asObservable();
        this.favotiteButton = this._favotiteButton.asObservable();
    }

    /**
     * back button
     */
    public navigateBack(): void {
        window.history.back();
    }

    /**
     * Передает id книги, при нажатии на кнопку слушать
     * @returns {void}
     */
    public startVoice(): void {
        this.bookId
            .pipe(
                tap(id => this._dataService.setData(id || ''))
            )
            .subscribe();
        // this._dataService.setData(this._bookId || '');
    }

    /**
     * Добавление книги в понравившиеся
     * @returns {void}
     */
    public addFavoriteBook(): void {
        this.bookId
            .pipe(
                switchMap(id => this._bookService.addFavouriteBook(id || '')),
                filter(resp => resp.ok),
                tap(value => {
                    this._favotiteButton.next(!this._favotiteButton.getValue());
                })
            )
            .subscribe();
        // this._bookService.addFavouriteBook(this._bookId || '').subscribe();
    }


    /**
     * Редирект на страницу автора
     * @param id
     */
    public navigateToAuthor(id: string): void {
        this._router.navigate([`/author/${id}`]);
    }

    public ngOnInit(): void {
        this._route.paramMap
            .pipe(
                tap((params: ParamMap) => {
                    this._bookId.next(params.get('bookId'));
                })
            )
            .subscribe();
        this.bookId
            .pipe(
                switchMap(id => this._bookService.getBookById(id ?? '')),
                filter(resp => resp.ok),
                tap(resp => {
                    if (resp.ok && resp.body) {
                        this.imageUrl = resp.body.imageSrc;
                        this._favotiteButton.next(!!resp.body.isFavourite);
                        this._book$.next(resp.body);
                    }
                }),
                switchMap(book => this._averageColor.getAverageColor(this.imageUrl)),
                tap(hex => {
                    console.log(hex);
                    this.backgroundColor = hex;
                    this._cdr.detectChanges();
                }),
                switchMap(() => {
                    return this._seriesService.getSeriesById(this._book$.getValue()?.series?.[0].id ?? '');
                }),
                switchMap(() => this.book),
                switchMap(book => this._seriesService.getSeriesById(book?.series?.[0].id ?? '')),
                tap(series =>
                    this._series.next(series.body?.books ?? [])
                )
            )
            .subscribe();
        this._mainService.getAllBooks()
            .subscribe(resp => {
                if (resp.ok && resp.body) {
                    this._books.next(resp.body);
                }
            });
    }
}
