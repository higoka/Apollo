import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class AvailabilityStatusMessageComposer extends MessageComposer {
    private isOpen: boolean;
    private isShuttingDown: boolean;
    private isAuthenticHabbo: boolean;

    constructor(isOpen: boolean, isShuttingDown: boolean, isAuthenticHabbo: boolean) {
        super();

        this.isOpen = isOpen;
        this.isShuttingDown = isShuttingDown;
        this.isAuthenticHabbo = isAuthenticHabbo;
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.AVAILABILITY_STATUS);
        this.response.writeBoolean(this.isOpen);
        this.response.writeBoolean(this.isShuttingDown);
        this.response.writeBoolean(this.isAuthenticHabbo);
        return this.response;
    }
}