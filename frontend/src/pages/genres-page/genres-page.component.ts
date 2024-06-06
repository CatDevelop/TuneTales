import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';
import { IBook } from '../../entities/Book/model/book.interface';
import { IBookResponse } from '../main-page/model/types/dto/get-books.response-dto';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GenreService } from '../../entities/Genre/services/genre.service';


@Component({
    selector: 'app-genres-page',
    templateUrl: './genres-page.component.html',
    styleUrl: './genres-page.component.scss'
})
export class GenresPageComponent implements OnInit{
    private _genresId: string | null = null;
    public books: Observable<IBook[]>;
    private _books: BehaviorSubject<IBookResponse[]> = new BehaviorSubject<IBook[]>([]);
    public name: string = '';

    constructor(
        private _route: ActivatedRoute,
        private _genresService: GenreService,
        private _cdr: ChangeDetectorRef,
    ) {
        this.books = this._books.asObservable();
    }

    public ngOnInit(): void {
        this._route.paramMap.pipe()
            .subscribe((params: ParamMap) => {
                this._genresId = params.get('genresId');
            });

        this._genresService.getGenreById(this._genresId ?? '')
            .pipe(
                filter(res => res.ok),
                tap(res => {
                    if (res.body) {
                        this._books.next(res.body.books);
                        this.name = res.body.name;
                        console.log(res.body.name);
                        this._cdr.detectChanges();
                    }
                }),
            ).subscribe();
    }
}
