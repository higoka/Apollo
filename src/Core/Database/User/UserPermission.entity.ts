import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('permissions')
export class UserPermissionEntity {
    @PrimaryColumn()
    id: number;

    @PrimaryColumn()
    rank_name: string;

    @Column()
    badge: string;

    @Column()
    level: number;

    @Column()
    room_effect: number;

    @Column()
    log_commands: number;

    @Column()
    prefix: string;

    @Column()
    prefix_color: string;

    @Column()
    cmd_about: number;

    @Column()
    cmd_alert: number;

    @Column()
    cmd_allow_trading: number;

    @Column()
    cmd_badge: number;

    @Column()
    cmd_ban: number;

    @Column()
    cmd_blockalert: number;

    @Column()
    cmd_bots: number;

    @Column()
    cmd_bundle: number;

    @Column()
    cmd_calendar: number;

    @Column()
    cmd_changename: number;

    @Column()
    cmd_chatcolor: number;

    @Column()
    cmd_commands: number;

    @Column()
    cmd_connect_camera: number;

    @Column()
    cmd_control: number;

    @Column()
    cmd_coords: number;

    @Column()
    cmd_credits: number;

    @Column()
    cmd_danceall: number;

    @Column()
    cmd_diagonal: number;

    @Column()
    cmd_disconnect: number;

    @Column()
    cmd_duckets: number;

    @Column()
    cmd_ejectall: number;

    @Column()
    cmd_empty: number;

    @Column()
    cmd_empty_bots: number;

    @Column()
    cmd_empty_pets: number;

    @Column()
    cmd_enable: number;

    @Column()
    cmd_event: number;

    @Column()
    cmd_faceless: number;

    @Column()
    cmd_fastwalk: number;

    @Column()
    cmd_filterword: number;

    @Column()
    cmd_freeze: number;

    @Column()
    cmd_freeze_bots: number;

    @Column()
    cmd_gift: number;

    @Column()
    cmd_give_rank: number;

    @Column()
    cmd_ha: number;

    @Column()
    acc_can_stalk: number;

    @Column()
    cmd_hal: number;

    @Column()
    cmd_invisible: number;

    @Column()
    cmd_ip_ban: number;

    @Column()
    cmd_machine_ban: number;

    @Column()
    cmd_hand_item: number;

    @Column()
    cmd_happyhour: number;

    @Column()
    cmd_hidewired: number;

    @Column()
    cmd_kickall: number;

    @Column()
    cmd_softkick: number;

    @Column()
    cmd_massbadge: number;

    @Column()
    cmd_masscredits: number;

    @Column()
    cmd_massduckets: number;

    @Column()
    cmd_massgift: number;

    @Column()
    cmd_masspoints: number;

    @Column()
    cmd_moonwalk: number;

    @Column()
    cmd_mimic: number;

    @Column()
    cmd_multi: number;

    @Column()
    cmd_mute: number;

    @Column()
    cmd_pet_info: number;

    @Column()
    cmd_pickall: number;

    @Column()
    cmd_plugins: number;

    @Column()
    cmd_points: number;

    @Column()
    cmd_promote_offer: number;

    @Column()
    cmd_pull: number;

    @Column()
    cmd_push: number;

    @Column()
    cmd_redeem: number;

    @Column()
    cmd_reload_room: number;

    @Column()
    cmd_roomalert: number;

    @Column()
    cmd_roomcredits: number;

    @Column()
    cmd_roomeffect: number;

    @Column()
    cmd_roomgift: number;

    @Column()
    cmd_roomitem: number;

    @Column()
    cmd_roommute: number;

    @Column()
    cmd_roompixels: number;

    @Column()
    cmd_roompoints: number;

    @Column()
    cmd_say: number;

    @Column()
    cmd_say_all: number;

    @Column()
    cmd_setmax: number;

    @Column()
    cmd_set_poll: number;

    @Column()
    cmd_setpublic: number;

    @Column()
    cmd_setspeed: number;

    @Column()
    cmd_shout: number;

    @Column()
    cmd_shout_all: number;

    @Column()
    cmd_shutdown: number;

    @Column()
    cmd_sitdown: number;

    @Column()
    cmd_staffalert: number;

    @Column()
    cmd_staffonline: number;

    @Column()
    cmd_summonrank: number;

    @Column()
    cmd_super_ban: number;

    @Column()
    cmd_stalk: number;

    @Column()
    cmd_superpull: number;

    @Column()
    cmd_take_badge: number;

    @Column()
    cmd_talk: number;

    @Column()
    cmd_teleport: number;

    @Column()
    cmd_trash: number;

    @Column()
    cmd_transform: number;

    @Column()
    cmd_unban: number;

    @Column()
    cmd_unload: number;

    @Column()
    cmd_unmute: number;

    @Column()
    cmd_update_achievements: number;

    @Column()
    cmd_update_bots: number;

    @Column()
    cmd_update_catalogue: number;

    @Column()
    cmd_update_config: number;

    @Column()
    cmd_update_guildparts: number;

    @Column()
    cmd_update_hotel_view: number;

    @Column()
    cmd_update_items: number;

    @Column()
    cmd_update_navigator: number;

    @Column()
    cmd_update_permissions: number;

    @Column()
    cmd_update_pet_data: number;

    @Column()
    cmd_update_plugins: number;

    @Column()
    cmd_update_polls: number;

    @Column()
    cmd_update_texts: number;

    @Column()
    cmd_update_wordfilter: number;

    @Column()
    cmd_userinfo: number;

    @Column()
    cmd_word_quiz: number;

    @Column()
    cmd_warp: number;

    @Column()
    acc_anychatcolor: number;

    @Column()
    acc_anyroomowner: number;

    @Column()
    acc_empty_others: number;

    @Column()
    acc_enable_others: number;

    @Column()
    acc_see_whispers: number;

    @Column()
    acc_superwired: number;

    @Column()
    acc_supporttool: number;

    @Column()
    acc_unkickable: number;

    @Column()
    acc_guildgate: number;

    @Column()
    acc_moverotate: number;

    @Column()
    acc_placefurni: number;

    @Column()
    acc_unlimited_bots: number;

    @Column()
    acc_unlimited_pets: number;

    @Column()
    acc_hide_ip: number;

    @Column()
    acc_hide_mail: number;

    @Column()
    acc_not_mimiced: number;

    @Column()
    acc_chat_no_flood: number;

    @Column()
    acc_staff_chat: number;

    @Column()
    acc_staff_pick: number;

    @Column()
    acc_enteranyroom: number;

    @Column()
    acc_fullrooms: number;

    @Column()
    acc_infinite_credits: number;

    @Column()
    acc_infinite_pixels: number;

    @Column()
    acc_infinite_points: number;

    @Column()
    acc_ambassador: number;

    @Column()
    acc_debug: number;

    @Column()
    acc_chat_no_limit: number;

    @Column()
    acc_chat_no_filter: number;

    @Column()
    acc_nomute: number;

    @Column()
    acc_guild_admin: number;

    @Column()
    acc_catalog_ids: number;

    @Column()
    acc_modtool_ticket_q: number;

    @Column()
    acc_modtool_user_logs: number;

    @Column()
    acc_modtool_user_alert: number;

    @Column()
    acc_modtool_user_kick: number;

    @Column()
    acc_modtool_user_ban: number;

    @Column()
    acc_modtool_room_info: number;

    @Column()
    acc_modtool_room_logs: number;

    @Column()
    acc_trade_anywhere: number;

    @Column()
    acc_update_notifications: number;

    @Column()
    acc_helper_use_guide_tool: number;

    @Column()
    acc_helper_give_guide_tours: number;

    @Column()
    acc_helper_judge_chat_reviews: number;

    @Column()
    acc_floorplan_editor: number;

    @Column()
    acc_camera: number;

    @Column()
    acc_ads_background: number;

    @Column()
    cmd_wordquiz: number;

    @Column()
    acc_room_staff_tags: number;

    @Column()
    acc_infinite_friends: number;

    @Column()
    acc_mimic_unredeemed: number;

    @Column()
    cmd_update_youtube_playlists: number;

    @Column()
    cmd_add_youtube_playlist: number;

    @Column()
    auto_credits_amount: number;

    @Column()
    auto_pixels_amount: number;

    @Column()
    auto_gotw_amount: number;

    @Column()
    auto_points_amount: number;

    @Column()
    acc_mention: number;

    @Column()
    cmd_setstate: number;

    @Column()
    cmd_buildheight: number;

    @Column()
    cmd_setrotation: number;

    @Column()
    cmd_sellroom: number;

    @Column()
    cmd_buyroom: number;

    @Column()
    cmd_pay: number;

    @Column()
    cmd_kill: number;

    @Column()
    cmd_hoverboard: number;

    @Column()
    cmd_kiss: number;

    @Column()
    cmd_hug: number;

    @Column()
    cmd_welcome: number;

    @Column()
    cmd_disable_effects: number;

    @Column()
    cmd_brb: number;

    @Column()
    cmd_nuke: number;

    @Column()
    cmd_slime: number;

    @Column()
    cmd_explain: number;

    @Column()
    cmd_closedice: number;

    @Column()
    acc_closedice_room: number;

    @Column()
    cmd_set: number;

    @Column()
    cmd_furnidata: number;

    @Column()
    kiss_cmd: number;
}