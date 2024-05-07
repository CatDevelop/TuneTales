import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Book} from "../../book/entities/book.entity";

@Entity()
export class Genre {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @ManyToMany(() => Book, (book) => book.genres, {onDelete: "CASCADE"})
    books: Book[]
}
