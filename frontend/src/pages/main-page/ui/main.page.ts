import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GetBooksResponseDto, IBookResponse } from '../model/types/dto/get-books.response-dto';
import { MainPageService } from '../model/services/main.page.service';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { IGetGenresResponseDto } from '../../../entities/Genre/model/dto/response/get-genres.response-dto';
import { GenreService } from '../../../entities/Genre/services/genre.service';
import { IBook } from '../../../entities/Book/model/book.interface';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-main.page',
    templateUrl: './main.page.html',
    styleUrl: './main.page.scss',
})
export class MainPage implements OnInit {
    public books: Observable<IBook[]>;
    private _books: BehaviorSubject<IBookResponse[]> = new BehaviorSubject<IBook[]>([]);
    public genres: Observable<IGetGenresResponseDto>;
    private _genres: BehaviorSubject<IGetGenresResponseDto> = new BehaviorSubject<IGetGenresResponseDto>([]);

    constructor(
        private _mainService: MainPageService,
        private _genreService: GenreService,
    ) {
        this.books = this._books.asObservable();
        this.genres = this._genres.asObservable();
    }


    public ngOnInit(): void {
        this._mainService.getAllBooks()
            .subscribe(
                (res: HttpResponse<GetBooksResponseDto>) => {
                    this._books.next(res.body ?? []);
                },
            );
        this._genreService.getGenres()
            .pipe(
                filter(res => res.ok),
                tap((res: HttpResponse<IGetGenresResponseDto>) => {
                    this._genres.next(res.body ?? []);
                }),
            )
            .subscribe()
        ;
    }
}
