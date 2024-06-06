import { IAuthor } from '../../author.interface';
import { IBook } from '../../../../Book/model/book.interface';

export interface IGetAuthorByIdResponseDto extends IAuthor {
    writtenBooks: IBook[];
    soundedBooks: IBook[];
}
