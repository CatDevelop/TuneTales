import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IBook } from '../../../entities/Book/model/book.interface';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-main.page',
    templateUrl: './main.page.html',
    styleUrl: './main.page.scss',
})
export class MainPage {
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
}
