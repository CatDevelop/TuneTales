import { IGenre } from '../../genre.interface';
import { IBook } from '../../../../Book/model/book.interface';

export interface IGetGenreByIdResponseDto extends IGenre {
    books?: IBook[]
}
