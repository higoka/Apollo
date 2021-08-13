import { HabboDefs } from "src/Games/User/Habbo.defs";
import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class MessengerInitComposer extends MessageComposer {
    private habbo: HabboDefs;

    constructor(habbo: HabboDefs) {
        super();

        this.habbo = habbo;
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.MESSENGER_INIT);

        this.response.writeInt(200);
        this.response.writeInt(1337);
        this.response.writeInt(500);

        this.response.writeInt(0);

        return this.response;
    }
}