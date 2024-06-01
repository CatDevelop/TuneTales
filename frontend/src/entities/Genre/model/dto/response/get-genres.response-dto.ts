import { IGenre } from '../../genre.interface';

export interface IGetGenresResponseDto extends IGenre {
    genres: IGenre[];
}
