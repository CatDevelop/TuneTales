import { IBook } from '../../../../../entities/Book/model/book.interface';

export interface IFavourite {
    email: string;
    favourite_books: IBook[];
    firstName: string;
    id: string;
    lastName: string;
    login: string;
    secondName: string;
}
