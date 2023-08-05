import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";


@Entity("user")
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    email: string

    @Column({ select: false })
    password: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    photoURL: string;

    @Column({ default: 0 })
    permission: 0 | 1;

    @Column({ default: new Date() })
    createdAt: string;

    constructor() {
        if (!this.id) {
            this.id = v4()
        }
    }
}