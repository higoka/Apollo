import * as ws from "ws";
import * as net from "net";
import { Logger } from "@nestjs/common";
import { OutPacket } from "src/Messages/Outgoing/Out.packet";
import { HabboDefs } from "../User/Habbo.defs";
import { ArrayBufferUtils } from "src/Utils/ArrayBufferUtils";
import { HabboService } from "../User/Habbo.service";
import { GameclientService } from "./Gameclient.service";

export class GameclientDefs {
    private readonly logger = new Logger(HabboService.name);
    public channel: ws | net.Socket;
    public habbo: HabboDefs;

    constructor(channel: ws | net.Socket) {
        this.channel = channel;
    }

    public async destroy(id: number, gameclientService: GameclientService): Promise<void> {
        if (this.habbo != null) {
            await this.habbo.setOffline(this.habbo.habboInfo.id);
            this.logger.log(this.habbo.habboInfo.username + " disconnected");
            gameclientService.users.delete(id);
            this.channel = null;
            this.habbo = null;
        }
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