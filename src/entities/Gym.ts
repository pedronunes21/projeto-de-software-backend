import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";


@Entity("gym")
export class Gym {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string

    @Column()
    address: string;

    @Column({ nullable: true })
    logoURL: string;

    @Column()
    description: string;

    @Column({ default: new Date() })
    createdAt: string;

    constructor() {
        if (!this.id) {
            this.id = v4()
        }
    }
}