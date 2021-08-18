import { UserEntity } from "src/Core/Database/User/User.entity";
import { GameClientDefs } from "../GameClient/GameClient.defs";

export class HabboDefs {
    private client: GameClientDefs;

    constructor(data: UserEntity) {
        this.client = null;       
    }

    public set setClient(client: GameClientDefs) {
        this.client = client;
    }

    public get getClient(): GameClientDefs {
        return this.client;
    }
}