import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class PongComposer extends MessageComposer {
    private id: number;

    constructor(id: number) {
        super();
    
        this.id = id;
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.CLIENT_LATENCY);
        return this.response;
    }
}