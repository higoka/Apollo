import { User } from "src/Core/Database/User/User.entity";

export class HabboInfoDefs {
    public id: number;
    public username: string;
    public motto: string;
    public look: string;
    public gender: string;
    public sso: string;
    public ipRegister: string;
    public ipCurrent: string;
    public accountCreated: string;
    public rank: any; // TODO: Change type
    public credits: number;
    public lastOnline: string;
    public homeRoom: number;
    public online: boolean;
    public loadingRoom: number;
    public currentRoom; // TODO: Add type "Room"

    constructor(data: User) {
        this.id = data.id;
        this.username = data.username;
        this.motto = data.motto;
        this.look = data.look;
        this.gender = data.gender;
        this.sso = data.auth_ticket;
        this.ipRegister = data.ip_register;
        this.ipCurrent = data.ip_current;
        this.accountCreated = data.account_created;
        this.rank = data.rank;
        this.credits = data.credits;
        this.lastOnline = data.last_online;
        this.homeRoom = data.home_room;
        this.online = !!data.online;
    }
}