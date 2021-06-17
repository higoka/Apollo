import { PongComposer } from 'src/Messages/Outgoing/Handshake/PongComposer';
import { OutgoingList } from 'src/Messages/Outgoing/Outgoing.list';
import { MessageHandler } from '../message.handler';

export class PingEvent extends MessageHandler {
    public handle(): void {
        this.gameClient.send(OutgoingList.CLIENT_LATENCY, new PongComposer(this.entryPacket.readInt()).compose());
    }
}