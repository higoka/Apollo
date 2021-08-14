import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class MachineIDComposer extends MessageComposer {
    private machine: string;

    constructor(machine: string) {
        super();

        this.machine = machine;       
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.SECURITY_MACHINE);
        this.response.writeString(this.machine);
        return this.response;
    }
}