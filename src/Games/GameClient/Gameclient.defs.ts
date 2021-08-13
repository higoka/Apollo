import * as ws from "ws";
import { OutPacket } from "src/Messages/Outgoing/Out.packet";
import { HabboDefs } from "../User/Habbo.defs";

export class GameclientDefs {
    public channel: ws;
    public habbo: HabboDefs;

    constructor(channel: ws) {
        this.channel = channel;
    }

    public send(message: OutPacket | Array<OutPacket>): void {
        var out: OutPacket;
        if (Array.isArray(message)) {
            message.forEach((packet: OutPacket) => {
                out = packet.encode();
            });
        } else {
            out = message.encode();
        }
        this.write(out.getBuffer);
    }

    private write(buffer: ArrayBufferLike): void {
        if (this.channel.readyState !== this.channel.OPEN)
            return;
 
        this.channel.send(buffer);
    }
}