import { HabboDefs } from "src/Games/User/Habbo.defs";
import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class UserDataComposer extends MessageComposer {
    private habbo: HabboDefs;

    constructor(habbo: HabboDefs) {
        super();

        this.habbo = habbo;
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.USER_INFO);
        this.response.writeInt(this.habbo.habboInfo.id);
        this.response.writeString(this.habbo.habboInfo.username);
        this.response.writeString(this.habbo.habboInfo.look);
        this.response.writeString(this.habbo.habboInfo.gender);
        this.response.writeString(this.habbo.habboInfo.motto);
        this.response.writeString(this.habbo.habboInfo.username);
        this.response.writeBoolean(false);
        this.response.writeInt(0);
        this.response.writeInt(0);
        this.response.writeInt(0);
        this.response.writeBoolean(false);
        this.response.writeString("01-01-1970 00:00:00");
        this.response.writeBoolean(false);
        this.response.writeBoolean(false);
        return this.response;
    }
}