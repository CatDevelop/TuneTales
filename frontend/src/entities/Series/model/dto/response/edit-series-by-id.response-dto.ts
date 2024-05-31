import { ISeries } from '../../series.interface';
import { IBook } from '../../../../Book/model/book.interface';

export interface IEditSeriesByIdResponseDto extends ISeries {
    books?: IBook[];
}
