import * as ws from "ws";
import * as net from "net";
import { OutgoingPacket } from "src/Message/Outgoing/Outgoing.packet";
import { ArrayBufferUtils } from "src/Utils/ArrayBufferUtils";
import { HabboDefs } from "../Habbo/Habbo.defs";

export class GameClientDefs {
    private habbo: HabboDefs;
    private channel: ws | net.Socket;

    constructor(channel: ws | net.Socket) {
        this.channel = channel;
    }

    public set setHabbo(habbo: HabboDefs) {
        this.habbo = habbo;
    }

    public get getHabbo(): HabboDefs {
        return this.habbo;
    }

    public destroy(): void {
        this.channel = null;
        this.habbo = null;
    }

    public send(message: OutgoingPacket | Array<OutgoingPacket>): void {
        if (Array.isArray(message)) {
            for (var packet of message) {
                var out: OutgoingPacket = packet.encode();
                this.writer(out.getBuffer);
            }
        } else {
            var out: OutgoingPacket = message.encode();
            this.writer(out.getBuffer);
        }
    }

    private writer(buffer: ArrayBufferLike): void {
        if (this.channel instanceof ws) {
            if (this.channel.readyState != this.channel.OPEN)
                return;
 
            this.channel.send(buffer);
        } else if (this.channel instanceof net.Socket) {
            this.channel.write(ArrayBufferUtils.toBuffer(buffer));
        }
    }
}