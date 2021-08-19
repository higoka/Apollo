import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { ApolloManager } from 'src/Apollo.manager';
import { GameClientDefs } from 'src/HabboHotel/GameClient/GameClient.defs';
import { SSOTicketMessageEvent } from './Incoming/Handshake/SSOTicketMessageEvent';
import { IncomingPacket } from './Incoming/Incoming.packet';
import { InOpcodeList } from './Incoming/InOpcode.list';
import { MessageReceiver } from './Incoming/Message.receiver';

@Injectable()
export class MessageManager {
    private readonly logger = new Logger(MessageManager.name);
    private incomingPackets: Map<number, MessageReceiver>;
    private packetNames: Map<number, string>;

    constructor(
        @Inject(forwardRef(() => ApolloManager))
        private readonly apolloManager: ApolloManager
    ) {
        this.incomingPackets = new Map<number, MessageReceiver>();
        this.packetNames = new Map<number, string>();

        this.setHandshake();
        this.setNames();
    }

    public execute(gameClient: GameClientDefs, packet: IncomingPacket, client: string): void {
        if (gameClient == null) {
            return;
        }

        if (packet.opcode == 26979) {
            return;
        }

        var handler: MessageReceiver = this.incomingPackets.get(packet.opcode);

        if (handler == null) {
            if (this.apolloManager.CoreManager.ConfigurationManager.getBoolean("game.tcp.packets_log")) {
                this.logger.debug("Unrecognized packet received: " + packet.opcode + " - " + client); 
            }
            return;
        }

        handler.GameClient = gameClient;
        handler.Packet = packet;

        if (this.apolloManager.CoreManager.ConfigurationManager.getBoolean("game.tcp.packets_log")) {
            if (this.packetNames.has(packet.opcode)) {
                this.logger.debug("Packet " + this.packetNames.get(packet.opcode) + " executed - " + client);
            } else {
                this.logger.debug("Packet UnNamedEvent executed - " + client);
            }
        }

        handler.read();
    }

    private setHandshake(): void {
        this.incomingPackets.set(InOpcodeList.SSOTicketMessageEvent, new SSOTicketMessageEvent(this.apolloManager));
    }

    private setNames(): void {
        this.packetNames.set(InOpcodeList.SSOTicketMessageEvent, "SSOTicketMessageEvent");
    }
}