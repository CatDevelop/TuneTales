import { IAuthor } from '../../../../../entities/Author/model/author.interface';
import { IBook } from '../../../../../entities/Book/model/book.interface';

export interface IAuthorResponse extends IAuthor {
    writtenBooks: Array<Omit<IBook, 'authors' | 'speakers'>>;
    soundedBooks: Array<Omit<IBook, 'authors' | 'speakers'>>;
}

export type GetAuthorResponseDto = IAuthorResponse;
