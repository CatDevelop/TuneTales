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

export interface IOpenFile {
    file: IAudioChapter,
    index: number
}

export interface ITimes {
    time: number;
    name: string;
}

export interface ISpeed {
    speed: number;
    name: string;
}
