import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";
import { User } from "./User";
import { Gym } from "./Gym";
import { Training } from "./Training";

@Entity("lesson")
export class Lesson {
    @PrimaryColumn()
    id: string;

    // @ManyToOne(() => User, (user) => user.id)
    // user: string;

    @ManyToOne(() => Gym, (gym) => gym.id)
    gym: string;

    @ManyToOne(() => Training, (training) => training.id)
    training: string;

    @Column()
    title: string;

    @Column()
    maxUsers: number;

    @Column()
    weekDay: number;

    @Column()
    time: string;

    constructor() {
        if (!this.id) {
            this.id = v4()
        }
    }

}