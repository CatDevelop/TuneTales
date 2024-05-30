import { IAuthor } from '../../Author/model/author.interface';
import { ISpeaker } from '../../Speaker/model/speaker.interface';
import { IGenre } from '../../Genre/model/genre.interface';
import { ISeries } from '../../Series/model/series.interface';

export interface IBook {
    name: string;
    description: string;
    publicationYear: number;
    imageSrc: string;
    authors: IAuthor[];
    speakers: ISpeaker[];
    genres: IGenre[];
    series?: ISeries[];
}
