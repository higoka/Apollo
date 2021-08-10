import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('users_settings')
export class UserSettingsEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    credits: number;

    @Column()
    achievement_score: number;

    @Column()
    daily_respect_points: number;

    @Column()
    daily_pet_respect_points: number;

    @Column()
    respects_given: number;

    @Column()
    respects_received: number;

    @Column()
    guild_id: number;

    @Column()
    can_change_name: number;

    @Column()
    can_trade: number;

    @Column()
    is_citizen: number;

    @Column()
    citizen_level: number;

    @Column()
    helper_level: number;

    @Column()
    tradelock_amount: number;

    @Column()
    cfh_send: number;

    @Column()
    cfh_abusive: number;

    @Column()
    cfh_warnings: number;

    @Column()
    cfh_bans: number;

    @Column()
    block_following: number;

    @Column()
    block_friendrequests: number;

    @Column()
    block_roominvites: number;

    @Column()
    volume_system: number;
    
    @Column()
    volume_furni: number;

    @Column()
    volume_trax: number;

    @Column()
    old_chat: number;

    @Column()
    block_camera_follow: number;

    @Column()
    chat_color: number;

    @Column()
    home_room: number;

    @Column()
    online_time: number;

    @Column()
    tags: string;

    @Column()
    club_expire_timestamp: number;

    @Column()
    login_streak: number;

    @Column()
    rent_space_id: number;

    @Column()
    rent_space_endtime: number;

    @Column()
    hof_points: number;

    @Column()
    block_alerts: number;

    @Column()
    talent_track_citizenship_level: number;

    @Column()
    talent_track_helpers_level: number;

    @Column()
    ignore_bots: number;

    @Column()
    ignore_pets: number;

    @Column()
    nux: number;

    @Column()
    mute_end_timestamp: number;

    @Column()
    allow_name_change: number;

    @Column()
    perk_trade: number;

    @Column()
    forums_post_count: number;

    @Column()
    ui_flags: number;

    @Column()
    has_gotten_default_saved_searches: number;

    @Column()
    hc_gifts_claimed: number;

    @Column()
    last_hc_payday: number;

    @Column()
    max_rooms: number;

    @Column()
    max_friends: number;
}