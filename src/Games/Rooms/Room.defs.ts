import { RoomsEntity } from "src/Core/Database/Rooms/Rooms.entity";
import { RoomModelDefs } from "./RoomModel.defs";

export class RoomDefs {
    public id: number;
    public owner_id: number;
    public owner_name: string;
    public name: string;
    public description: string;
    public model: string;
    public password: string;
    public state: string;
    public users: number;
    public users_max: number;
    public guild_id: number;
    public category: number;
    public score: number;
    public paper_floor: string;
    public paper_wall: string;
    public paper_landscape: string;
    public thickness_wall: number;
    public wall_height: number;
    public thickness_floor: number;
    public moodlight_data: Array<string>;
    public tags: string;
    public is_public: number;
    public is_staff_picked: number;
    public allow_other_pets: number;
    public allow_other_pets_eat: number;
    public allow_walkthrough: number;
    public allow_hidewall: number;
    public chat_mode: number;
    public chat_weight: number;
    public chat_speed: number;
    public chat_hearing_distance: number;
    public chat_protection: number;
    public override_model: boolean;
    public who_can_mute: number;
    public who_can_kick: number;
    public who_can_ban: number;
    public poll_id: number;
    public roller_speed: number;
    public promoted: boolean;
    public trade_mode: number;
    public move_diagonally: boolean;
    public jukebox_active: boolean;
    public hidewired: boolean;
    public is_forsale: number;
    public preLoaded: boolean;
    public loaded: boolean;
    public modelDefs: RoomModelDefs;

    constructor(data: RoomsEntity, model: RoomModelDefs) {
        this.id = data.id;
        this.owner_id = data.owner_id;
        this.owner_name = data.owner_name;
        this.name = data.name;
        this.description = data.description;
        this.model = data.model;
        this.password = data.password;
        this.state = data.state.toUpperCase();
        this.users = data.users;
        this.users_max = data.users_max;
        this.guild_id = data.guild_id;
        this.category = data.category;
        this.score = data.score;
        this.paper_floor = data.paper_floor;
        this.paper_wall = data.paper_wall;
        this.paper_floor = data.paper_landscape;
        this.thickness_wall = data.thickness_wall;
        this.wall_height = data.wall_height;
        this.thickness_floor = data.thickness_floor;
        this.moodlight_data = data.moodlight_data.split(";");
        this.tags = data.tags;
        this.is_public = data.is_public;
        this.is_staff_picked = data.is_staff_picked;
        this.allow_other_pets = data.allow_other_pets;
        this.allow_other_pets_eat = data.allow_other_pets_eat;
        this.allow_walkthrough = data.allow_walkthrough;
        this.allow_hidewall = data.allow_hidewall;
        this.chat_mode = data.chat_mode;
        this.chat_weight = data.chat_weight;
        this.chat_speed = data.chat_speed;
        this.chat_hearing_distance = data.chat_hearing_distance;
        this.chat_protection = data.chat_protection;
        this.override_model = (data.override_model == 1);
        this.who_can_mute = data.who_can_mute;
        this.who_can_kick = data.who_can_kick;
        this.who_can_ban = data.who_can_ban;
        this.poll_id = data.poll_id;
        this.roller_speed = data.roller_speed;
        this.promoted = (data.promoted == 1);
        this.trade_mode = data.trade_mode;
        this.move_diagonally = (data.move_diagonally == 1);
        this.jukebox_active = (data.jukebox_active == 1);
        this.hidewired = (data.hidewired == 1);
        this.is_forsale = data.is_forsale;
        this.modelDefs = model;
        this.preLoaded = true;
    }

    public loadData(): void {
        if (!this.preLoaded || this.loaded) {
            return;
        }

        this.preLoaded = false;

        
    }
}