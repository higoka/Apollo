import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class NewNavigatorLiftedRoomsComposer extends MessageComposer {
    constructor() {
        super();
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.NAVIGATOR_LIFTED);

        this.response.writeInt(0);

        return this.response;
    }
}