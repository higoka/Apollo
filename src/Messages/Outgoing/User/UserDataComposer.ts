import { HabboDefs } from "src/Games/User/Habbo.defs";
import { MessageComposer } from "../Message.composer";

export class UserDataComposer extends MessageComposer {
    private habbo: HabboDefs;

    constructor(habbo: HabboDefs) {
        super();

        this.habbo = habbo;
    }

    protected composeInternal(): void {
        this.data = [ this.habbo.habboInfo.id, this.habbo.habboInfo.username, this.habbo.habboInfo.look, this.habbo.habboInfo.gender, this.habbo.habboInfo.motto, this.habbo.habboInfo.username, false, 0, 0, 0, false, "01-01-1970 00:00:00", false, false ];
    }
}