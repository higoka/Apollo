import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class UnknownComposer5 extends MessageComposer {
    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.SECURITY_UNKNOWN2);
        this.response.writeString("");
        this.response.writeString("");
        return this.response;
    }
}