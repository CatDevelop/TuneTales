export interface IAudioChapter {
    id: string;
    name: string;
    durationSeconds: number;
    audioSrc: string;
}

export type ITimeEntry = {
    time: number;
    name: string;
};

export type ISpeedEntry = {
    speed: number;
    name: string;
};


export interface IAuthor {
    id: string;
    firstName: string;
    secondName: string;
    lastName: string;
    description: string;
    imageSrc: string;
}

export interface IPart {
    id: string;
    name: string;
    durationSeconds: number;
    audioSrc: string;
}

export interface IBook {
    id: string;
    name: string;
    description: string;
    publicationYear: number;
    imageSrc: string;
    authors: IAuthor[];
    speakers: any[];
    genres: any[];
    parts: IPart[];
    series: any[];
}
