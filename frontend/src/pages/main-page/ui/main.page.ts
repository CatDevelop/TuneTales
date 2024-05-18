import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IBook } from '../../../entities/Book/model/book.interface';
import { GetBooksResponseDto, IBookResponse } from '../model/types/dto/get-books.response-dto';
import { MainPageService } from '../model/services/main.page.service';
import { HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-main.page',
    templateUrl: './main.page.html',
    styleUrl: './main.page.scss',
})
export class MainPage implements OnInit {
    public book: IBook = {
        name: 'Как легко завести разговор с любимым человеком',
        authors: [{
            id: '1',
            firstName: 'Марк',
            secondName: 'Мэнсо'
        }],
        publicationYear: 123,
        imageSrc: 'https://book-cover.ru/sites/default/files/field/image/dostoevskiy-prestuplenie-i-nakazanie.jpg',
        genres: [],
        speakers: [],
        description: ''
    };
    public books: Observable<IBookResponse[]>;
    private _books: BehaviorSubject<IBookResponse[]> = new BehaviorSubject<IBookResponse[]>([]);

    constructor(
        private _mainService: MainPageService
    ) {
        this.books = this._books.asObservable();
    }

    public ngOnInit(): void {
        this._mainService.getBookById()
            .subscribe(
                (res: HttpResponse<GetBooksResponseDto>) => {
                    this._books.next(res.body ?? []);
                },
            );
    }
}
