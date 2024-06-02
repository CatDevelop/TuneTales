import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GetBooksResponseDto, IBookResponse } from '../model/types/dto/get-books.response-dto';
import { MainPageService } from '../model/services/main.page.service';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { IGetGenresResponseDto } from '../../../entities/Genre/model/dto/response/get-genres.response-dto';
import { GenreService } from '../../../entities/Genre/services/genre.service';
import { IBook } from '../../../entities/Book/model/book.interface';
import { AuthorizationService } from '../../authorization-page/services/authorization.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-main.page',
    templateUrl: './main.page.html',
    styleUrl: './main.page.scss',
})
export class MainPage implements OnInit {
    public mockBooks: IBookResponse[] = [
        {
            id: '25508876-670b-4a9f-a930-d47e1d89f6e9',
            name: 'Приключения Тома Сойера1',
            description: 'В книге о приключениях Тома Сойера писатель с большим мастерством нарисовал жизнь американского провинциального городка 40-х годов XIX века. Благодаря напряженному сюжету и блестящему юмору эта книга горячо любима читателями всего мира.',
            publicationYear: 1876,
            imageSrc: 'https://cv3.litres.ru/pub/c/cover_250/129935.webp',
            authors: [
                {
                    id: '23b73218-b66d-42db-861d-091b0fb12488',
                    firstName: 'Патрик',
                    secondName: 'Кинг',
                    lastName: undefined,
                    description: undefined,
                    imageSrc: undefined
                }
            ],
            speakers: [],
            genres: [],
            series: [
                {
                    id: 'bb5fe219-1899-42e4-861b-ee66721bf7ca',
                    name: 'Тестовая серия'
                }
            ]
        },
        {
            id: '25508876-670b-4a9f-a930-d47e1d89f6e9',
            name: 'Приключения Тома Сойера1',
            description: 'В книге о приключениях Тома Сойера писатель с большим мастерством нарисовал жизнь американского провинциального городка 40-х годов XIX века. Благодаря напряженному сюжету и блестящему юмору эта книга горячо любима читателями всего мира.',
            publicationYear: 1876,
            imageSrc: 'https://cv3.litres.ru/pub/c/cover_250/129935.webp',
            authors: [
                {
                    id: '23b73218-b66d-42db-861d-091b0fb12488',
                    firstName: 'Патрик',
                    secondName: 'Кинг',
                    lastName: undefined,
                    description: undefined,
                    imageSrc: undefined
                }
            ],
            speakers: [],
            genres: [],
            series: [
                {
                    id: 'bb5fe219-1899-42e4-861b-ee66721bf7ca',
                    name: 'Тестовая серия'
                }
            ]
        },
        {
            id: '25508876-670b-4a9f-a930-d47e1d89f6e9',
            name: 'Приключения Тома Сойера1',
            description: 'В книге о приключениях Тома Сойера писатель с большим мастерством нарисовал жизнь американского провинциального городка 40-х годов XIX века. Благодаря напряженному сюжету и блестящему юмору эта книга горячо любима читателями всего мира.',
            publicationYear: 1876,
            imageSrc: 'https://cv3.litres.ru/pub/c/cover_250/129935.webp',
            authors: [
                {
                    id: '23b73218-b66d-42db-861d-091b0fb12488',
                    firstName: 'Патрик',
                    secondName: 'Кинг',
                    lastName: undefined,
                    description: undefined,
                    imageSrc: undefined
                }
            ],
            speakers: [],
            genres: [],
            series: [
                {
                    id: 'bb5fe219-1899-42e4-861b-ee66721bf7ca',
                    name: 'Тестовая серия'
                }
            ]
        },
        {
            id: '25508876-670b-4a9f-a930-d47e1d89f6e9',
            name: 'Приключения Тома Сойера1',
            description: 'В книге о приключениях Тома Сойера писатель с большим мастерством нарисовал жизнь американского провинциального городка 40-х годов XIX века. Благодаря напряженному сюжету и блестящему юмору эта книга горячо любима читателями всего мира.',
            publicationYear: 1876,
            imageSrc: 'https://cv3.litres.ru/pub/c/cover_250/129935.webp',
            authors: [
                {
                    id: '23b73218-b66d-42db-861d-091b0fb12488',
                    firstName: 'Патрик',
                    secondName: 'Кинг',
                    lastName: undefined,
                    description: undefined,
                    imageSrc: undefined
                }
            ],
            speakers: [],
            genres: [],
            series: [
                {
                    id: 'bb5fe219-1899-42e4-861b-ee66721bf7ca',
                    name: 'Тестовая серия'
                }
            ]
        },
        {
            id: '25508876-670b-4a9f-a930-d47e1d89f6e9',
            name: 'Приключения Тома Сойера1',
            description: 'В книге о приключениях Тома Сойера писатель с большим мастерством нарисовал жизнь американского провинциального городка 40-х годов XIX века. Благодаря напряженному сюжету и блестящему юмору эта книга горячо любима читателями всего мира.',
            publicationYear: 1876,
            imageSrc: 'https://cv3.litres.ru/pub/c/cover_250/129935.webp',
            authors: [
                {
                    id: '23b73218-b66d-42db-861d-091b0fb12488',
                    firstName: 'Патрик',
                    secondName: 'Кинг',
                    lastName: undefined,
                    description: undefined,
                    imageSrc: undefined
                }
            ],
            speakers: [],
            genres: [],
            series: [
                {
                    id: 'bb5fe219-1899-42e4-861b-ee66721bf7ca',
                    name: 'Тестовая серия'
                }
            ]
        },
        {
            id: '25508876-670b-4a9f-a930-d47e1d89f6e9',
            name: 'Приключения Тома Сойера1',
            description: 'В книге о приключениях Тома Сойера писатель с большим мастерством нарисовал жизнь американского провинциального городка 40-х годов XIX века. Благодаря напряженному сюжету и блестящему юмору эта книга горячо любима читателями всего мира.',
            publicationYear: 1876,
            imageSrc: 'https://cv3.litres.ru/pub/c/cover_250/129935.webp',
            authors: [
                {
                    id: '23b73218-b66d-42db-861d-091b0fb12488',
                    firstName: 'Патрик',
                    secondName: 'Кинг',
                    lastName: undefined,
                    description: undefined,
                    imageSrc: undefined
                }
            ],
            speakers: [],
            genres: [],
            series: [
                {
                    id: 'bb5fe219-1899-42e4-861b-ee66721bf7ca',
                    name: 'Тестовая серия'
                }
            ]
        },
        {
            id: '25508876-670b-4a9f-a930-d47e1d89f6e9',
            name: 'Приключения Тома Сойера1',
            description: 'В книге о приключениях Тома Сойера писатель с большим мастерством нарисовал жизнь американского провинциального городка 40-х годов XIX века. Благодаря напряженному сюжету и блестящему юмору эта книга горячо любима читателями всего мира.',
            publicationYear: 1876,
            imageSrc: 'https://cv3.litres.ru/pub/c/cover_250/129935.webp',
            authors: [
                {
                    id: '23b73218-b66d-42db-861d-091b0fb12488',
                    firstName: 'Патрик',
                    secondName: 'Кинг',
                    lastName: undefined,
                    description: undefined,
                    imageSrc: undefined
                }
            ],
            speakers: [],
            genres: [],
            series: [
                {
                    id: 'bb5fe219-1899-42e4-861b-ee66721bf7ca',
                    name: 'Тестовая серия'
                }
            ]
        },
        {
            id: '25508876-670b-4a9f-a930-d47e1d89f6e9',
            name: 'Приключения Тома Сойера1',
            description: 'В книге о приключениях Тома Сойера писатель с большим мастерством нарисовал жизнь американского провинциального городка 40-х годов XIX века. Благодаря напряженному сюжету и блестящему юмору эта книга горячо любима читателями всего мира.',
            publicationYear: 1876,
            imageSrc: 'https://cv1.litres.ru/pub/c/cover_415/70618612.webp',
            authors: [
                {
                    id: '23b73218-b66d-42db-861d-091b0fb12488',
                    firstName: 'Патрик',
                    secondName: 'Кинг',
                    lastName: undefined,
                    description: undefined,
                    imageSrc: undefined
                }
            ],
            speakers: [],
            genres: [],
            series: [
                {
                    id: 'bb5fe219-1899-42e4-861b-ee66721bf7ca',
                    name: 'Тестовая серия'
                }
            ]
        },
        {
            id: '25508876-670b-4a9f-a930-d47e1d89f6e9',
            name: 'Приключения Тома Сойера1',
            description: 'В книге о приключениях Тома Сойера писатель с большим мастерством нарисовал жизнь американского провинциального городка 40-х годов XIX века. Благодаря напряженному сюжету и блестящему юмору эта книга горячо любима читателями всего мира.',
            publicationYear: 1876,
            imageSrc: 'https://cv3.litres.ru/pub/c/cover_250/129935.webp',
            authors: [
                {
                    id: '23b73218-b66d-42db-861d-091b0fb12488',
                    firstName: 'Патрик',
                    secondName: 'Кинг',
                    lastName: undefined,
                    description: undefined,
                    imageSrc: undefined
                }
            ],
            speakers: [],
            genres: [],
            series: [
                {
                    id: 'bb5fe219-1899-42e4-861b-ee66721bf7ca',
                    name: 'Тестовая серия'
                }
            ]
        },
        {
            id: '25508876-670b-4a9f-a930-d47e1d89f6e9',
            name: 'Приключения Тома Сойера1',
            description: 'В книге о приключениях Тома Сойера писатель с большим мастерством нарисовал жизнь американского провинциального городка 40-х годов XIX века. Благодаря напряженному сюжету и блестящему юмору эта книга горячо любима читателями всего мира.',
            publicationYear: 1876,
            imageSrc: 'https://cv1.litres.ru/pub/c/cover_415/70618612.webp',
            authors: [
                {
                    id: '23b73218-b66d-42db-861d-091b0fb12488',
                    firstName: 'Патрик',
                    secondName: 'Кинг',
                    lastName: undefined,
                    description: undefined,
                    imageSrc: undefined
                }
            ],
            speakers: [],
            genres: [],
            series: [
                {
                    id: 'bb5fe219-1899-42e4-861b-ee66721bf7ca',
                    name: 'Тестовая серия'
                }
            ]
        },
        {
            id: '25508876-670b-4a9f-a930-d47e1d89f6e9',
            name: 'Приключения Тома Сойера1',
            description: 'В книге о приключениях Тома Сойера писатель с большим мастерством нарисовал жизнь американского провинциального городка 40-х годов XIX века. Благодаря напряженному сюжету и блестящему юмору эта книга горячо любима читателями всего мира.',
            publicationYear: 1876,
            imageSrc: 'https://cv3.litres.ru/pub/c/cover_250/129935.webp',
            authors: [
                {
                    id: '23b73218-b66d-42db-861d-091b0fb12488',
                    firstName: 'Патрик',
                    secondName: 'Кинг',
                    lastName: undefined,
                    description: undefined,
                    imageSrc: undefined
                }
            ],
            speakers: [],
            genres: [],
            series: [
                {
                    id: 'bb5fe219-1899-42e4-861b-ee66721bf7ca',
                    name: 'Тестовая серия'
                }
            ]
        },

    ];
    public books: Observable<IBook[]>;
    private _books: BehaviorSubject<IBookResponse[]> = new BehaviorSubject<IBook[]>([]);
    public genres: Observable<IGetGenresResponseDto>;
    private _genres: BehaviorSubject<IGetGenresResponseDto> = new BehaviorSubject<IGetGenresResponseDto>([]);

    constructor(
        private _mainService: MainPageService,
        private _genreService: GenreService,
        private _authService: AuthorizationService,
    ) {
        this.books = this._books.asObservable();
        this.genres = this._genres.asObservable();
        this._authService.init();
    }


    public ngOnInit(): void {
        this._mainService.getAllBooks()
            .subscribe(
                (res: HttpResponse<GetBooksResponseDto>) => {
                    // this._books.next(res.body ?? []);
                    this._books.next(this.mockBooks);
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
