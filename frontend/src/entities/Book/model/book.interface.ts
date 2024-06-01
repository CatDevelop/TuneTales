import { IAuthor } from '../../Author/model/author.interface';
import { IGenre } from '../../Genre/model/genre.interface';
import { ISeries } from '../../Series/model/series.interface';

export interface IBook {
    id: string;
    name: string;
    description: string;
    publicationYear: number;
    imageSrc: string;
    authors: IAuthor[];
    speakers: IAuthor[];
    genres: IGenre[];
    series?: ISeries[];
}
