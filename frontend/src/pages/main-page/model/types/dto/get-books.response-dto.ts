import { IBook } from '../../../../../entities/Book/model/book.interface';

export interface IBookResponse extends IBook {
}

export type GetBooksResponseDto = IBookResponse[];
