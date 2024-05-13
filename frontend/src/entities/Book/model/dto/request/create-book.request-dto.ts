export interface ICreateBookRequestDto {
    name: string,
    description: string,
    publicationYear: number,
    imageSrc: string,
    authors?: string[],
    speakers?: string[],
    genres?: string[]
}
