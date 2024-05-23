import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IBookResponse } from '../model/types/dto/get-books.response-dto';
import { MainPageService } from '../model/services/main.page.service';
import { BehaviorSubject, Observable } from 'rxjs';

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
    public books: Observable<IBookResponse[]>;
    private _books: BehaviorSubject<IBookResponse[]> = new BehaviorSubject<IBookResponse[]>([]);

    constructor(
        private _mainService: MainPageService
    ) {
        this.books = this._books.asObservable();
    }

    public ngOnInit(): void {
        // this._mainService.getAllBooks()
        //     .subscribe(
        //         (res: HttpResponse<GetBooksResponseDto>) => {
        //             this._books.next(res.body ?? []);
        //         },
        //     );
        this._books.next(this.mockBooks);
    }
}
