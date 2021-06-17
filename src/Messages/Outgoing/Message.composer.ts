import { OutPacket } from "./Out.packet";

export abstract class MessageComposer {
    private message: OutPacket;
    protected response: OutPacket;

    constructor() {
        this.response = new OutPacket();
    }

    protected abstract composeInternal(): OutPacket;

    public compose(): OutPacket {
        if (this.message == null) {
            this.message = this.composeInternal();
        }

        return this.message;
    }
}