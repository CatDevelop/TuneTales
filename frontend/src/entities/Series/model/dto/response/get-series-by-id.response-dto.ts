import { ISeries } from '../../series.interface';
import { IBook } from '../../../../Book/model/book.interface';

export interface IGetSeriesByIdResponseDto extends ISeries {
    books?: IBook[];
}
