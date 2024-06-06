import { IAuthor } from '../../../../../entities/Author/model/author.interface';
import { IBook } from '../../../../../entities/Book/model/book.interface';

export interface IAuthorResponse extends IAuthor {
    writtenBooks: IBook[];
    soundedBooks: IBook[];
}

export type GetAuthorResponseDto = IAuthorResponse;
