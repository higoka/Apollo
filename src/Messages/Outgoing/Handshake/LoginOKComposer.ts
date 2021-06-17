import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class LoginOKComposer extends MessageComposer {
    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.AUTHENTICATED);
        return this.response;
    }
}