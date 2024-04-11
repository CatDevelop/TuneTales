import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

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
}
