import { IBook } from '../../Book/model/book.interface';

export interface IGenre {
    id: string;
    name: string;
    books: IBook[];
}
