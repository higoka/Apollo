import * as ws from "ws";
import * as net from "net";
import { OutPacket } from "src/Messages/Outgoing/Out.packet";
import { HabboDefs } from "../User/Habbo.defs";
import { ArrayBufferUtils } from "src/Utils/ArrayBufferUtils";

export class GameclientDefs {
    public channel: ws | net.Socket;
    public habbo: HabboDefs;

    constructor(channel: ws | net.Socket) {
        this.channel = channel;
    }

    public send(message: OutPacket | Array<OutPacket>): void {
        var out: OutPacket;
        if (Array.isArray(message)) {
            for (var packet of message) {
                out = packet.encode();
            }
        } else {
            out = message.encode();
        }
        if (this.channel instanceof net.Socket) {
            this.flashWriter(out.getBuffer);
        } else if (this.channel instanceof ws) {
            this.nitroWriter(out.getBuffer);
        }
    }

    private flashWriter(buffer: ArrayBuffer): void {
        if (this.channel instanceof net.Socket) {
            this.channel.write(ArrayBufferUtils.toBuffer(buffer));
        }
    }

    private nitroWriter(buffer: ArrayBufferLike): void {
        if (this.channel instanceof ws) {
            if (this.channel.readyState !== this.channel.OPEN)
                return;
 
            this.channel.send(buffer);
        }
    }
}