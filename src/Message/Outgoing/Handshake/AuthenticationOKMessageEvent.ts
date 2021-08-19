import { MessageSender } from "../Message.sender";
import { OutOpcodeList } from "../OutOpcode.list";

export class AuthenticationOKMessageEvent extends MessageSender {
    constructor() {
        super(OutOpcodeList.AuthenticationOKMessageComposer);
    }

    protected write(): void {
        this.packet.writeInt(1);
    }
}