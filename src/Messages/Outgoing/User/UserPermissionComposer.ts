import { HabboDefs } from "src/Games/User/Habbo.defs";
import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class UserPermissionComposer extends MessageComposer {
    private habbo: HabboDefs;

    constructor(habbo: HabboDefs) {
        super();

        this.habbo = habbo;
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.USER_PERMISSIONS);
        this.response.writeInt(2);
        this.response.writeInt(this.habbo.habboInfo.rankId);
        this.response.writeBoolean(true);
        return this.response;
    }
}