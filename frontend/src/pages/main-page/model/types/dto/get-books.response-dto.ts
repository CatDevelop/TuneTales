import { IBook } from '../../../../../entities/Book/model/book.interface';

export interface IBookResponse extends IBook {
    id: string;
}

export type GetBooksResponseDto = IBookResponse[];
