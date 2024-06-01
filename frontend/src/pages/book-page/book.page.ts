import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookService } from '../../entities/Book/services/book.service';
import { IGetBookResponseDto } from '../../entities/Book/model/dto/response/get-book.response-dto';
import { HttpResponse } from '@angular/common/http';
import { IBookResponse } from '../main-page/model/types/dto/get-books.response-dto';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-book-page',
    templateUrl: './book.page.html',
    styleUrl: './book.page.scss'
})
export class BookPage implements OnInit {
    public mockBooks: IBookResponse[] = [
        {
            id: '8d419c91-442a-4143-ac89-98289c73bc55',
            name: 'Приключения Тома Сойера1Приключения Тома Сойера1',
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

    private _bookId: string | null = null;
    private _book$: BehaviorSubject<IGetBookResponseDto | null> = new BehaviorSubject<IGetBookResponseDto | null>(null);
    public book: Observable<IGetBookResponseDto | null>;

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

    public get speakerName(): string {
        let result: string = '';
        this.book
            .subscribe(
                data => {
                    if (data && data.speakers) {
                        // @ts-ignore
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
                        // @ts-ignore
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
                        data.parts.forEach(part => {
                            result += part.durationSeconds;
                        });
                    }
                }
            );

        return Math.floor(result / 60);
    }

    /**
     * back button
     */
    public navigateBack(): void {
        window.history.back();
    }

    public ngOnInit(): void {
        this._route.paramMap
            .subscribe((params: ParamMap) => {
                this._bookId = params.get('bookId');
            });
        this._bookService.getBookById(this._bookId ?? '')
            .subscribe((resp: HttpResponse<IGetBookResponseDto>) => {
                if (resp.ok && resp.body) {
                    this._book$.next(resp.body);
                }
            });
    }

    constructor(
        private _route: ActivatedRoute,
        private _bookService: BookService,
    ) {
        this.book = this._book$.asObservable();
    }
}
