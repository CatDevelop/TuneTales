import { IBook } from '../../../../Book/model/book.interface';

export interface IGetBookPartByIdResponseDto {
    id: string;
    name: string;
    durationSeconds: number;
    audioSrc: string;
    book: IBook;
}
