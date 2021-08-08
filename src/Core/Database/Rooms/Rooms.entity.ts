import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('rooms')
export class RoomsEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    owner_id: number;


    @Column()
    owner_name: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    model: string;

    @Column()
    password: string;

    @Column()
    state: string;

    @Column()
    users: number;

    @Column()
    users_max: number;

    @Column()
    guild_id: number;

    @Column()
    category: number;

    @Column()
    score: number;

    @Column()
    paper_floor: string;

    @Column()
    paper_wall: string;

    @Column()
    paper_landscape: string;

    @Column()
    thickness_wall: number;

    @Column()
    wall_height: number;

    @Column()
    thickness_floor: number;

    @Column()
    moodlight_data: string;

    @Column()
    tags: string;

    @Column()
    is_public: number;

    @Column()
    is_staff_picked: number;

    @Column()
    allow_other_pets: number;

    @Column()
    allow_other_pets_eat: number;

    @Column()
    allow_walkthrough: number;

    @Column()
    allow_hidewall: number;

    @Column()
    chat_mode: number;

    @Column()
    chat_weight: number;

    @Column()
    chat_speed: number;

    @Column()
    chat_hearing_distance: number;

    @Column()
    chat_protection: number;

    @Column()
    override_model: number;

    @Column()
    who_can_mute: number;

    @Column()
    who_can_kick: number;

    @Column()
    who_can_ban: number;

    @Column()
    poll_id: number;

    @Column()
    roller_speed: number;

    @Column()
    promoted: number;

    @Column()
    trade_mode: number;

    @Column()
    move_diagonally: number;

    @Column()
    jukebox_active: number;

    @Column()
    hidewired: number;

    @Column()
    is_forsale: number;
}