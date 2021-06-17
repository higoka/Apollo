import { PongComposer } from 'src/Messages/Outgoing/Handshake/PongComposer';
import { MessageHandler } from '../message.handler';

export class PingEvent extends MessageHandler {
    public handle(): void {
        this.gameClient.send(new PongComposer(this.entryPacket.readInt()).compose());
    }
}