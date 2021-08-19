import { GameClientDefs } from "src/HabboHotel/GameClient/GameClient.defs";
import { IncomingPacket } from "./Incoming.packet";

export abstract class MessageReceiver {
    private gameClient: GameClientDefs;
    private packet: IncomingPacket;

    public abstract read(): void;

    public set GameClient(gameClient: GameClientDefs) {
        this.gameClient = gameClient;
    }

    public set Packet(packet: IncomingPacket) {
        this.packet = packet;
    }

    public get GameClient(): GameClientDefs {
        return this.gameClient;
    }

    public get Packet(): IncomingPacket {
        return this.packet;
    }
}