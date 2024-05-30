import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { GetAuthorResponseDto, IAuthorResponse } from '../model/types/dto/get-author.response-dto';
import { AuthorPageService } from '../model/services/author.page.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'author.page',
    templateUrl: './author.page.html',
    styleUrl: './author.page.scss',
})
export class AuthorPage implements OnInit, OnDestroy {
    public mockAuthor: IAuthorResponse = {
        'id': '3b6244ff-0f5d-412b-8c8e-75e7da8b55b4',
        'firstName': 'Марк',
        'secondName': 'Твен',
        'lastName': '',
        'description': 'Марк Твен – американский писатель, журналист и общественный деятель. Его творчество охватывает множество жанров: юмор, сатиру, философскую фантастику, публицистику. Марк Твен (настоящее имя писателя – Сэмюэл Лэнгхорн Клеменс) родился 30 ноября 1835 года во Флориде, штат Миссури. Его семья была небогатой, а со смертью отца в 1847 году ее материальное положение значительно ухудшилось. Чтобы помочь родным, мальчик стал учеником наборщика и работал в типографии, но мечтал стать моряком.',
        'imageSrc': 'https://avatars.dzeninfra.ru/get-zen_doc/5255669/pub_60ee683d7fcf347863cf6edb_60ee685f455e4253e0944ded/scale_1200',
        'writtenBooks': [
            {
                'id': 'cbee54c5-1ae8-4e98-abd5-b66808b4ab09',
                'name': 'Приключения Тома Сойера',
                'description': 'В книге о приключениях Тома Сойера писатель с большим мастерством нарисовал жизнь американского провинциального городка 40-х годов XIX века. Благодаря напряженному сюжету и блестящему юмору эта книга горячо любима читателями всего мира.',
                'publicationYear': 1876,
                'imageSrc': 'https://cv3.litres.ru/pub/c/cover_250/129935.webp',
                'authors': [
                    {
                        'id': '3b6244ff-0f5d-412b-8c8e-75e7da8b55b4',
                        'firstName': 'Марк',
                        'secondName': 'Твен',
                        'lastName': '',
                        'description': 'Марк Твен – американский писатель, журналист и общественный деятель. Его творчество охватывает множество жанров: юмор, сатиру, философскую фантастику, публицистику. Марк Твен (настоящее имя писателя – Сэмюэл Лэнгхорн Клеменс) родился 30 ноября 1835 года во Флориде, штат Миссури. Его семья была небогатой, а со смертью отца в 1847 году ее материальное положение значительно ухудшилось. Чтобы помочь родным, мальчик стал учеником наборщика и работал в типографии, но мечтал стать моряком.',
                        'imageSrc': 'https://avatars.dzeninfra.ru/get-zen_doc/5255669/pub_60ee683d7fcf347863cf6edb_60ee685f455e4253e0944ded/scale_1200'
                    }
                ],
                genres: [],
                'speakers': []
            }
        ],
        'soundedBooks': []
    };

    private _initialAuthor: IAuthorResponse = {
        id: '',
        firstName: '',
        secondName: '',
        lastName: '',
        description: '',
        imageSrc: '',
        writtenBooks: [],
        soundedBooks: []
    };

    private _sub: Subscription;
    public authorId: string = '';

    public author: Observable<IAuthorResponse>;
    private _author: BehaviorSubject<IAuthorResponse> = new BehaviorSubject<IAuthorResponse>(this._initialAuthor);

    constructor(
        private _route: ActivatedRoute,
        private _authorService: AuthorPageService
    ) {
        this.author = this._author.asObservable();
        this._sub = this._route.params.subscribe(params => {
            this.authorId = params['authorId'];
        });
    }

    /**
     * Жизненный цикл компонента, вызываемый после инициализации свойств с привязкой данных.
     * Запрашивает информацию об авторе с сервера.
     */
    public ngOnInit(): void {
        this._authorService.getAuthor(this.authorId)
            .subscribe(
                (res: HttpResponse<GetAuthorResponseDto>) => {
                    console.log(res.body);
                    this._author.next(res.body ?? this._initialAuthor);
                },
            );
        // this._author.next(this.mockAuthor);
    }

    public ngOnDestroy(): void {
        this._sub.unsubscribe();
    }
}
