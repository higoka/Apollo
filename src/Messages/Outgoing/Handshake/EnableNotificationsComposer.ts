import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class EnableNotificationsComposer extends MessageComposer {
    private enabled: boolean;

    constructor(enabled: boolean) {
        super();
    
        this.enabled = enabled;
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.SECURITY_DEBUG);
        this.response.writeBoolean(this.enabled);
        return this.response;
    }
}