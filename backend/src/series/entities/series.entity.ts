import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Book} from "../../book/entities/book.entity";

@Entity()
export class Series {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @ManyToMany(() => Book, (book) => book.series, {onDelete: "CASCADE"})
    @JoinTable({
        name: "series_books", joinColumn: {
            name: 'series_id',
            referencedColumnName: 'id',
        }, inverseJoinColumn: {
            name: 'book_id',
            referencedColumnName: 'id',
        },
    })
    books: Book[];
}
