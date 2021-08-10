import { UserEntity } from "src/Core/Database/User/User.entity";
import { UserService } from "src/Core/Database/User/User.service";
import { UserCurrencyEntity } from "src/Core/Database/User/UserCurrency.entity";
import { PermissionService } from "../Permission/Permission.service";
import { RankDefs } from "../Permission/Rank.defs";
import { RoomDefs } from "../Rooms/Room.defs";

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
    public rank: RankDefs;
    public credits: number;
    public lastOnline: string;
    public homeRoom: number;
    public online: boolean;
    public loadingRoom: number;
    public currentRoom: RoomDefs;
    public currencies: Map<number, number>;
    public firstVisit: boolean;

    constructor(data: UserEntity, permissionService: PermissionService) {
        this.id = data.id;
        this.username = data.username;
        this.motto = data.motto;
        this.look = data.look;
        this.gender = data.gender;
        this.sso = data.auth_ticket;
        this.ipRegister = data.ip_register;
        this.ipCurrent = data.ip_current;
        this.accountCreated = data.account_created;
        this.credits = data.credits;
        this.lastOnline = data.last_online;
        this.homeRoom = data.home_room;
        this.online = false;
        this.rank = permissionService.rank.get(data.rank);

        if (this.rank == null) {
            this.rank = permissionService.rank.get(1);
        }

        this.currentRoom = null;
    }

    public async loadCurrencies(userService: UserService): Promise<void> {
        this.currencies = new Map<number, number>();

        return userService.findCurrencyByUserId(this.id).then((currencies: UserCurrencyEntity[]) => {
            currencies.forEach((currency: UserCurrencyEntity) => {
                this.currencies.set(currency.type, currency.amount);
            });
        });
    }

    public getCurrencyAmount(type: number): number {
        return this.currencies.get(type);
    }
}