import { UserEntity } from "src/Core/Database/User/User.entity";
import { UserManager } from "src/Core/Database/User/User.manager";
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
    private userManager: UserManager;

    constructor(data: UserEntity, userManager: UserManager) {
        this.userManager = userManager;
        this.id = data.id;
        this.username = data.user_info.username;
        this.motto = data.user_info.motto;
        this.look = data.user_info.look;
        this.gender = data.user_info.gender;
        this.ipRegister = data.register_ip;
        this.ipCurrent = data.current_ip;
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

        return this.userManager.findCurrencyByUserId(this.getId).then((currencies: UserCurrencyEntity[]) => {
            for (var currency of currencies) {
                this.currencies.set(currency.currency_name, currency.amount);
            }
        })
    }
}