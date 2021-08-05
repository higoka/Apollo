import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class GenericAlertComposer extends MessageComposer {
    private outMessage: string;

    constructor(message: string) {
        super();

        this.outMessage = message;
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.GENERIC_ALERT);

        this.response.writeString(this.outMessage);

        return this.response;
    }
}