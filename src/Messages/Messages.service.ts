import { Injectable, Logger } from '@nestjs/common';
import { ConfigurationService } from 'src/Core/Configuration/Configuration.service';
import { EmulatorService } from 'src/Core/Database/Emulator/Emulator.service';
import { GameclientDefs } from 'src/Games/GameClient/Gameclient.defs';
import { HabboService } from 'src/Games/User/Habbo.service';
import { PingEvent } from './Incoming/Handshake/PingEvent';
import { ReleaseVersionEvent } from './Incoming/Handshake/ReleaseVersionEvent';
import { SecureLoginEvent } from './Incoming/Handshake/SecureLoginEvent';
import { InPacket } from './Incoming/In.packet';
import { IncomingList } from './Incoming/Incoming.list';
import { MessageHandler } from './Incoming/Message.handler';
import { RequestUserCurrencyEvent } from './Incoming/User/RequestUserCurrencyEvent';
import { RequestUserDataEvent } from './Incoming/User/RequestUserDataEvent';

@Injectable()
export class MessagesService {
    private readonly logger = new Logger(MessagesService.name);
    public incomingPackets: Map<number, MessageHandler>;
    public packetNames: Map<number, string>;

    constructor(
        private readonly configurationService: ConfigurationService,
        private readonly habboService: HabboService
    ) {
        this.incomingPackets = new Map<number, MessageHandler>();
        this.packetNames = new Map<number, string>();

        this.registerHandshake();
        this.registerUsers();
        this.registerNames();
    }

    checkRegister(packetId: number): boolean {
        return this.incomingPackets.has(packetId);
    }

    handlePacket(client: GameclientDefs, packet: InPacket): void {
        if (client == null) {
            return;
        }

        if (this.checkRegister(packet.header)) {
            var handler: MessageHandler = this.incomingPackets.get(packet.header);
            if (this.configurationService.getBoolean("game.tcp.packets_log")) {
                if (handler == null) {
                    this.logger.debug("Pacchetto " + packet.header + " non riconosciuto!");
                    return;
                }
            }

            handler.entryPacket = packet;
            handler.gameClient = client;

            if (this.configurationService.getBoolean("game.tcp.packets_log")) {
                this.logger.debug("Pacchetto " + this.packetNames.get(packet.header) + " eseguito");
            }

            handler.handle();
        }
    }

    registerHandshake(): void {
        this.incomingPackets.set(IncomingList.RELEASE_VERSION, new ReleaseVersionEvent());
        this.incomingPackets.set(IncomingList.SECURITY_TICKET, new SecureLoginEvent(this.habboService));
        this.incomingPackets.set(IncomingList.CLIENT_LATENCY, new PingEvent());
    }

    registerUsers(): void {
        this.incomingPackets.set(IncomingList.USER_INFO, new RequestUserDataEvent());
        this.incomingPackets.set(IncomingList.USER_CURRENCY, new RequestUserCurrencyEvent());
    }

    registerNames(): void {
        this.packetNames.set(IncomingList.RELEASE_VERSION, "ReleaseVersionEvent");
        this.packetNames.set(IncomingList.SECURITY_TICKET, "SecureLoginEvent");
        this.packetNames.set(IncomingList.USER_INFO, "RequestUserDataEvent");
        this.packetNames.set(IncomingList.USER_CURRENCY, "RequestUserCurrencyEvent");
    }
}