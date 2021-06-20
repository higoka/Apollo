import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class PingComposer extends MessageComposer {
    constructor() {
        super();
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.CLIENT_PING);
        return this.response;
    }
}