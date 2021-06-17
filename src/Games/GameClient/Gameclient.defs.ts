import * as ws from "ws";
import { OutPacket } from "src/Messages/Outgoing/Out.packet";
import { HabboDefs } from "../User/Habbo.defs";

export class GameclientDefs {
    public channel: ws;
    public habbo: HabboDefs;

    constructor(channel: ws) {
        this.channel = channel;
    }

    public send(message: OutPacket): void {
        var out: OutPacket = message.encode();
        this.write(out.getBuffer);
    }

    private write(buffer: ArrayBufferLike): void {
        if (this.channel.readyState !== this.channel.OPEN)
            return;
 
        this.channel.send(buffer);
    }
}