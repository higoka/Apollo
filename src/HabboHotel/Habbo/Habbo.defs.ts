import { ApolloManager } from "src/Apollo.manager";
import { UserEntity } from "src/Core/Database/User/User.entity";
import { GameClientDefs } from "../GameClient/GameClient.defs";
import { HabboDataDefs } from "./HabboData.defs";

export class HabboDefs {
    private client: GameClientDefs;
    private habboData: HabboDataDefs;

    constructor(data: UserEntity, apolloManager: ApolloManager) {
        this.client = null;
        this.habboData = new HabboDataDefs(data, apolloManager);
    }

    public get getHabboData(): HabboDataDefs {
        return this.habboData;
    }

    public set setClient(client: GameClientDefs) {
        this.client = client;
    }

    public get getClient(): GameClientDefs {
        return this.client;
    }
}