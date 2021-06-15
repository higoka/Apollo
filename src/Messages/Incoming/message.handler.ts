import { GameclientDefs } from "src/Games/GameClient/Gameclient.defs";
import { InPacket } from "./In.packet";

export abstract class MessageHandler {
    public gameClient: GameclientDefs;
    public entryPacket: InPacket;

    public abstract handle(): void;
}