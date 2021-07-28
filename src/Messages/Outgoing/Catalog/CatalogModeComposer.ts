import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class CatalogModeComposer extends MessageComposer {
    private mode: number;

    constructor(mode: number) {
        super();

        this.mode = mode;
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.CATALOG_MODE);
        this.response.writeInt(this.mode);
        return this.response;
    }
}