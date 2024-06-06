import { Book } from "src/book/entities/book.entity";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class BookPart {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({default: 0})
    durationSeconds: number;

    @Column({default: ""})
    audioSrc: string;

    @ManyToOne(() => Book, (book) => book.parts, {nullable: true})
    @JoinColumn({ name: 'book'})
    book: Book;
}
