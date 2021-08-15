import { MessengerFriendsEntity } from "src/Core/Database/Friends/MessengerFriends.entity";

export class MessengerBuddyDefs {
    public id: number;
    public username: string;
    public gender: string;
    public online: number;
    public look: string;
    public motto: string;
    public relation: number;
    public userOne = 0;
    public inRoom: boolean;

    constructor(data: MessengerFriendsEntity) {
        this.id = data.habbo.id;
        this.username = data.habbo.username;
        this.gender = data.habbo.gender;
        this.online = parseInt(data.habbo.online);
        this.look = data.habbo.look;
        this.motto = data.habbo.motto;
        this.relation = data.relation;
        this.userOne = data.user_one_id;
        this.inRoom = false;
    }
}