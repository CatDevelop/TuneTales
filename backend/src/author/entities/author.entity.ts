import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Book} from "../../book/entities/book.entity";

@Entity()
export class Author {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable: true})
    firstName?: string;

    @Column({nullable: true})
    secondName?: string;

    @Column({nullable: true})
    lastName?: string;

    @Column({nullable: true})
    description?: string;

    @Column({nullable: true})
    imageSrc?: string;

    @ManyToMany(() => Book, (book) => book.authors, {onDelete: "CASCADE"})
    writtenBooks: Book[]

    @ManyToMany(() => Book, (book) => book.speakers, {onDelete: "CASCADE"})
    soundedBooks: Book[]
}
