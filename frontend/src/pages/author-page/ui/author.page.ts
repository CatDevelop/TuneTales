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
    }

    public ngOnDestroy(): void {
        this._sub.unsubscribe();
    }
}
