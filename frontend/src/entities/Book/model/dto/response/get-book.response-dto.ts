import { IBook } from '../../book.interface';
import { IBookPart } from '../../book-part.interface';

export interface IGetBookResponseDto extends IBook {
    parts: IBookPart[];
}
