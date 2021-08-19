import { OutgoingPacket } from "./Outgoing.packet";

export abstract class MessageSender {
    protected packet: OutgoingPacket;

    constructor(opcode: number) {
        this.packet = new OutgoingPacket(opcode);
    }

    protected abstract write(): void;

    public compose(): OutgoingPacket {
        this.write();
        return this.packet;
    }
}