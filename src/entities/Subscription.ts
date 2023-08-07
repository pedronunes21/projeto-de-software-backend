import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";
import { User } from "./User";
import { Gym } from "./Gym";

@Entity("subscription")
export class Subscription {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => User, (user) => user.id)
    user: string;

    @ManyToOne(() => Gym, (gym) => gym.id)
    gym: string;

    constructor() {
        if (!this.id) {
            this.id = v4()
        }
    }

}