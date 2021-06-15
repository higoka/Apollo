import { OutPacket } from "src/Messages/Outgoing/Out.packet";
import { DataEncoder } from "src/Networking/Encoder/Data.encoder";
import * as ws from "ws";

export class GameclientDefs {
    public channel: ws;

    constructor(channel: ws) {
        this.channel = channel;
    }

    public send(header: number, messages: any[]): void {
        var encoder: OutPacket = new DataEncoder().encode(header, messages);
        this.write(encoder.getBuffer);
    }

    private write(buffer: ArrayBufferLike): void {
        if (this.channel.readyState !== this.channel.OPEN)
            return;

        this.channel.send(buffer);
    }
}