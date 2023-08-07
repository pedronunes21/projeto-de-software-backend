import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";
import { Gym } from "./Gym";


@Entity("training")
export class Training {

    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Gym, (gym) => gym.id)
    gym: string;

    @Column()
    category: string

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