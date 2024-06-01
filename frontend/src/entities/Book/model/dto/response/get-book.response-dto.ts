import { IBook } from '../../book.interface';
import { IBookPart } from '../../../../BookPart/model/book-part.interface';

export interface IGetBookResponseDto extends IBook {
    parts: IBookPart[];
}
