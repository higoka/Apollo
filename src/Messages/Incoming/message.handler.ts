import { InPacket } from "./In.packet";

export abstract class MessageHandler {
    //public gameClient: GameClient;
    public entryPacket: InPacket;

    public abstract handle(): void;
}