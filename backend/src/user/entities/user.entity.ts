import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Author} from "../../author/entities/author.entity";
import {Book} from "../../book/entities/book.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable: true})
    email: string;

    @Column()
    login: string;

    @Column({nullable: true})
    firstName?: string;

    @Column({nullable: true})
    secondName?: string;

    @Column({nullable: true})
    lastName?: string;

    @Column()
    password: string;

    @Column({default: "user"})
    role: string;

    @ManyToMany(() => Book, (book) => book.users, {onDelete: "CASCADE"})
    @JoinTable({
        name: "user_favourite_books", joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id',
        }, inverseJoinColumn: {
            name: 'book_id',
            referencedColumnName: 'id',
        },
    })
    favourite_books: Book[];
}
