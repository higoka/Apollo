import { ApolloManager } from "src/Apollo.manager";
import { UserEntity } from "src/Core/Database/User/User.entity";
import { UserCurrencyEntity } from "src/Core/Database/User/UserCurrency.entity";

export class HabboDataDefs {
    private id: number;
    private username: string;
    private motto: string;
    private look: string;
    private gender: string;
    private ipRegister: string;
    private ipCurrent: string;
    private accountCreated: number;
    private lastOnline: number;
    private homeRoom: number;
    private online: boolean;
    private currencies: Map<string, number>;
    private apolloManager: ApolloManager;

    constructor(data: UserEntity, apolloManager: ApolloManager) {
        this.apolloManager = apolloManager;
        this.id = data.id;
        this.username = data.username;
        this.motto = data.motto;
        this.look = data.look;
        this.gender = data.gender;
        this.ipRegister = data.register_ip;
        this.ipCurrent = data.current_ip;
        this.accountCreated = data.account_created;
        this.lastOnline = data.last_online;
        this.homeRoom = data.home_room;
        this.online = false;
    }

    public get getId(): number {
        return this.id;
    }

    public get getUsername(): string {
        return this.username;
    }

    public get getMotto(): string {
        return this.motto;
    }

    public get getLook(): string {
        return this.look;
    }

    public get getRegisterIp(): string {
        return this.ipRegister;
    }

    public get getCurrentIp(): string {
        return this.ipCurrent;
    }

    public get getAccountCreated(): number {
        return this.accountCreated;
    }

    public get getGender(): string {
        return this.gender;
    }

    public get getLastOnline(): number {
        return this.lastOnline;
    }

    public get getHomeRoom(): number {
        return this.homeRoom;
    }

    public get getState(): boolean {
        return this.online;
    }

    public get getCurrencies() {
        return this.currencies;
    }

    public async loadCurrencies(): Promise<void> {
        this.currencies.clear();

        return this.apolloManager.CoreManager.DatabaseManager.UserManager.findCurrencyByUserId(this.getId).then((currencies: UserCurrencyEntity[]) => {
            for (var currency of currencies) {
                this.currencies.set(currency.currency_name, currency.amount);
            }
        })
    }
}