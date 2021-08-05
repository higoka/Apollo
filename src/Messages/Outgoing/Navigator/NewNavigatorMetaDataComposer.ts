import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class NewNavigatorMetaDataComposer extends MessageComposer {
    constructor() {
        super();
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.NAVIGATOR_METADATA);

        this.response.writeInt(4);
        this.response.writeString("official_view");
        this.response.writeInt(0);
        this.response.writeString("hotel_view");
        this.response.writeInt(0);
        this.response.writeString("roomads_view");
        this.response.writeInt(0);
        this.response.writeString("myworld_view");
        this.response.writeInt(0);

        return this.response;
    }
}