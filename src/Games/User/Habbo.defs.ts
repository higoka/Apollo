import { User } from "src/Core/Database/User/User.entity";
import { GameclientDefs } from "../GameClient/Gameclient.defs";
import { HabboInfoDefs } from "./HabboInfo.defs";
import { HabboStatsDefs } from "./HabboStats.defs";

export class HabboDefs {
    public client: GameclientDefs;
    public habboInfo: HabboInfoDefs;
    public habboStats: HabboStatsDefs;

    constructor(data: User) {
        this.client = null;
        this.habboInfo = new HabboInfoDefs(data);
        this.habboStats = HabboStatsDefs.load(this.habboInfo);

        // TODO: Add messenger, inventory and roomunit
    }
}