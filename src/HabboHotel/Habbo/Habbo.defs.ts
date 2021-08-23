import { UserEntity } from "src/Core/Database/User/User.entity";
import { UserManager } from "src/Core/Database/User/User.manager";
import { GameClientDefs } from "../GameClient/GameClient.defs";
import { HabboDataDefs } from "./HabboData.defs";
import { HabboSettingsDefs } from "./HabboSettings.defs";

export class HabboDefs {
    private client: GameClientDefs;
    private habboData: HabboDataDefs;
    private habboSettings: HabboSettingsDefs;

    constructor(data: UserEntity, userManager: UserManager) {
        this.client = null;
        this.habboData = new HabboDataDefs(data, userManager);
        this.habboSettings = HabboSettingsDefs.load(data, userManager);
    }

    public get getHabboData(): HabboDataDefs {
        return this.habboData;
    }

    public get getHabboSetting(): HabboSettingsDefs {
        return this.habboSettings;
    }

    public set setClient(client: GameClientDefs) {
        this.client = client;
    }

    public get getClient(): GameClientDefs {
        return this.client;
    }
}