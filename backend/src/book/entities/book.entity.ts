import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, Unique} from "typeorm";
import {Genre} from "../../genre/entities/genre.entity";
import {BookPart} from "../../book-part/entities/book-part.entity";
import {Author} from "../../author/entities/author.entity";
import {User} from "../../user/entities/user.entity";
import {Series} from "../../series/entities/series.entity";

@Entity()
@Unique(['id'])
export class Book {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({nullable: true})
    description?: string;

    @Column()
    publicationYear: number;

    @Column({nullable: true})
    imageSrc?: string;

    @OneToMany(() => BookPart, (part) => part.book, {nullable: true})
    parts: BookPart[];

    @ManyToMany(() => User, (user) => user.favourite_books, {onDelete: "CASCADE"})
    users: User[]

    @ManyToMany(() => Series, (series) => series.books, {onDelete: "CASCADE"})
    series: Series[]

    @ManyToMany(() => Author, (author) => author.writtenBooks, {onDelete: "CASCADE"})
    @JoinTable({
        name: "book_author", joinColumn: {
            name: 'book_id',
            referencedColumnName: 'id',
        }, inverseJoinColumn: {
            name: 'author_id',
            referencedColumnName: 'id',
        },
    })
    authors: Author[];

    @ManyToMany(() => Author, (author) => author.soundedBooks, {onDelete: "CASCADE"})
    @JoinTable({
        name: "book_speaker", joinColumn: {
            name: 'book_id',
            referencedColumnName: 'id',
        }, inverseJoinColumn: {
            name: 'speaker_id',
            referencedColumnName: 'id',
        },
    })
    speakers: Author[];

    @ManyToMany(() => Genre, (genre) => genre.books, {onDelete: "CASCADE"})
    @JoinTable({
        name: "book_genre", joinColumn: {
            name: 'book_id',
            referencedColumnName: 'id',
        }, inverseJoinColumn: {
            name: 'genre_id',
            referencedColumnName: 'id',
        },
    })
    genres: Genre[];
}
