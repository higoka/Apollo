import { Entity, PrimaryColumn, Column, OneToOne, JoinTable, JoinColumn } from "typeorm";
import { UserEntity } from "../User/User.entity";

@Entity('messenger_friendships')
export class MessengerFriendsEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    user_one_id: number;

    @Column()
    user_two_id: number;

    @Column()
    relation: number;

    @Column()
    friends_since: number;

    @OneToOne(type => UserEntity)
    @JoinColumn({ referencedColumnName: "id", name: "user_two_id" })
    habbo: UserEntity;
}