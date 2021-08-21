import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('users_settings')
export class UserSettingsEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    home_room: number;

    @Column()
    given_respect: number;

    @Column()
    received_respect: number;

    @Column()
    can_change_name: number;

    @Column()
    can_trade: number;

    @Column()
    citizen_status: number;

    @Column()
    citizen_level: number;

    @Column()
    helper_level: number;

    @Column()
    block_following: number;

    @Column()
    block_friend_requests: number;

    @Column()
    block_room_invites: number;

    @Column()
    block_alerts: number;

    @Column()
    system_volume: number;

    @Column()
    furni_volume: number;

    @Column()
    trax_volume: number;

    @Column()
    chat_type: number;

    @Column()
    bots_ignore: number;

    @Column()
    pets_ignore: number;

    @Column()
    rooms_max_number: number;

    @Column()
    friends_max_number: number;
}