import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IAuthorResponse } from '../model/types/dto/get-author.response-dto';
import { AuthorPageService } from '../model/services/author.page.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-main.page',
    templateUrl: './author.page.html',
    styleUrl: './author.page.scss',
})
export class AuthorPage implements OnInit {
    public mockAuthor: IAuthorResponse = {
        'id': '3b6244ff-0f5d-412b-8c8e-75e7da8b55b4',
        'firstName': 'Марк',
        'secondName': 'Твен',
        'lastName': '',
        'description': 'Марк Твен – американский писатель, журналист и общественный деятель. Его творчество охватывает множество жанров: юмор, сатиру, философскую фантастику, публицистику. Марк Твен (настоящее имя писателя – Сэмюэл Лэнгхорн Клеменс) родился 30 ноября 1835 года во Флориде, штат Миссури. Его семья была небогатой, а со смертью отца в 1847 году ее материальное положение значительно ухудшилось. Чтобы помочь родным, мальчик стал учеником наборщика и работал в типографии, но мечтал стать моряком.',
        'imageSrc': 'https://avatars.dzeninfra.ru/get-zen_doc/5255669/pub_60ee683d7fcf347863cf6edb_60ee685f455e4253e0944ded/scale_1200',
        'writtenBooks': [
            {
                id: 'cbee54c5-1ae8-4e98-abd5-b66808b4ab09',
                name: 'Приключения Тома Сойера',
                description: 'В книге о приключениях Тома Сойера писатель с большим мастерством нарисовал жизнь американского провинциального городка 40-х годов XIX века. Благодаря напряженному сюжету и блестящему юмору эта книга горячо любима читателями всего мира.',
                publicationYear: 1876,
                imageSrc: 'https://cv3.litres.ru/pub/c/cover_250/129935.webp',
                genres: []
            }
        ],
        'soundedBooks': [

        ]
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

    public author: Observable<IAuthorResponse>;
    private _author: BehaviorSubject<IAuthorResponse> = new BehaviorSubject<IAuthorResponse>(this._initialAuthor);

    constructor(
        private _authorService: AuthorPageService
    ) {
        this.author = this._author.asObservable();
    }

    public ngOnInit(): void {
        // this._authorService.getAuthor('3b6244ff-0f5d-412b-8c8e-75e7da8b55b4')
        //     .subscribe(
        //         (res: HttpResponse<GetAuthorResponseDto>) => {
        //             this._author.next(res.body ?? this._initialAuthor);
        //         },
        //     );
        this._author.next(this.mockAuthor);
    }
}
