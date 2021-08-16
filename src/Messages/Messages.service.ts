import { Injectable, Logger } from '@nestjs/common';
import { ConfigurationService } from 'src/Core/Configuration/Configuration.service';
import { EmulatorService } from 'src/Core/Database/Emulator/Emulator.service';
import { GameService } from 'src/Games/Game.service';
import { GameclientDefs } from 'src/Games/GameClient/Gameclient.defs';
import { GameclientService } from 'src/Games/GameClient/Gameclient.service';
import { RequestCatalogModeEvent } from './Incoming/Catalog/RequestCatalogModeEvent';
import { RequestCatalogPageEvent } from './Incoming/Catalog/RequestCatalogPageEvent';
import { RequestInitFriendsEvent } from './Incoming/Friendship/RequestInitFriendsEvent';
import { MachineIDEvent } from './Incoming/Handshake/MachineIDEvent';
import { PingEvent } from './Incoming/Handshake/PingEvent';
import { ReleaseVersionEvent } from './Incoming/Handshake/ReleaseVersionEvent';
import { SecureLoginEvent } from './Incoming/Handshake/SecureLoginEvent';
import { InPacket } from './Incoming/In.packet';
import { IncomingList } from './Incoming/Incoming.list';
import { MessageHandler } from './Incoming/Message.handler';
import { RequestNewNavigatorDataEvent } from './Incoming/Navigator/RequestNewNavigatorDataEvent';
import { RequestNewNavigatorRoomsEvent } from './Incoming/Navigator/RequestNewNavigatorRoomsEvent';
import { RequestUserCurrencyEvent } from './Incoming/User/RequestUserCurrencyEvent';
import { RequestUserDataEvent } from './Incoming/User/RequestUserDataEvent';
import { RequestUserProfileEvent } from './Incoming/User/RequestUserProfileEvent';

@Injectable()
export class MessagesService {
    private readonly logger = new Logger(MessagesService.name);
    public incomingPackets: Map<number, MessageHandler>;
    public packetNames: Map<number, string>;

    constructor(
        private readonly configurationService: ConfigurationService,
        private readonly gameService: GameService,
        private readonly emulatorService: EmulatorService,
        private readonly gameclientService: GameclientService
    ) {
        this.incomingPackets = new Map<number, MessageHandler>();
        this.packetNames = new Map<number, string>();

        this.registerHandshake();
        this.registerUser();
        this.registerCatalog();
        this.registerNavigator();
        this.registerFriends();
        this.registerNames();
    }

    public handlePacket(client: GameclientDefs, packet: InPacket, clientType: string): void {
        if (client == null) {
            return;
        }

        if (packet.header == IncomingList.CLIENT_POLICY) {
            return;
        }

        var handler: MessageHandler = this.incomingPackets.get(packet.header);
        if (handler == null) {
            if (this.configurationService.getBoolean("game.tcp.packets_log")) {
                this.logger.debug("[" + clientType + "] Unrecognized packet received: " + packet.header); 
            }
            return;
        }

        handler.entryPacket = packet;
        handler.gameClient = client;

        if (this.configurationService.getBoolean("game.tcp.packets_log")) {
            if (this.packetNames.has(packet.header)) {
                this.logger.debug("[" + clientType + "] Packet " + this.packetNames.get(packet.header) + " readed and executed");
            } else {
                this.logger.debug("[" + clientType + "] Packet UnNamedEvent readed and executed");
            }
        }

        handler.handle();
    }

    private registerHandshake(): void {
        this.incomingPackets.set(IncomingList.RELEASE_VERSION, new ReleaseVersionEvent());
        this.incomingPackets.set(IncomingList.SECURITY_TICKET, new SecureLoginEvent(this.gameService.HabboService, this.emulatorService));
        //this.incomingPackets.set(IncomingList.CLIENT_LATENCY, new PingEvent());
        this.incomingPackets.set(IncomingList.SECURITY_MACHINE, new MachineIDEvent());
    }

    private registerUser(): void {
        this.incomingPackets.set(IncomingList.USER_INFO, new RequestUserDataEvent());
        this.incomingPackets.set(IncomingList.USER_PROFILE, new RequestUserProfileEvent(this.gameclientService));
        this.incomingPackets.set(IncomingList.USER_CURRENCY, new RequestUserCurrencyEvent());
    }

    private registerCatalog(): void {
        this.incomingPackets.set(IncomingList.CATALOG_MODE, new RequestCatalogModeEvent(this.gameService.CatalogueService));
        this.incomingPackets.set(IncomingList.CATALOG_PAGE, new RequestCatalogPageEvent(this.gameService.CatalogueService));
    }

    private registerNavigator(): void {
        this.incomingPackets.set(IncomingList.NAVIGATOR_INIT, new RequestNewNavigatorDataEvent());
        this.incomingPackets.set(IncomingList.NAVIGATOR_SEARCH, new RequestNewNavigatorRoomsEvent(this.gameService.NavigatorService));
    }

    private registerFriends(): void {
        this.incomingPackets.set(IncomingList.MESSENGER_INIT, new RequestInitFriendsEvent());
    }

    private registerNames(): void {
        this.packetNames.set(IncomingList.RELEASE_VERSION, "ReleaseVersionEvent");
        this.packetNames.set(IncomingList.SECURITY_TICKET, "SecureLoginEvent");
        this.packetNames.set(IncomingList.CLIENT_LATENCY, "PingEvent");
        this.packetNames.set(IncomingList.USER_PROFILE, "RequestUserProfileEvent");
        this.packetNames.set(IncomingList.SECURITY_MACHINE, "MachineIDEvent");
        this.packetNames.set(IncomingList.USER_INFO, "RequestUserDataEvent");
        this.packetNames.set(IncomingList.USER_CURRENCY, "RequestUserCurrencyEvent");
        this.packetNames.set(IncomingList.CATALOG_MODE, "RequestCatalogModeEvent");
        this.packetNames.set(IncomingList.CATALOG_PAGE, "RequestCatalogPageEvent");
        this.packetNames.set(IncomingList.NAVIGATOR_INIT, "RequestNewNavigatorDataEvent");
        this.packetNames.set(IncomingList.NAVIGATOR_SEARCH, "RequestNewNavigatorRoomsEvent");
        this.packetNames.set(IncomingList.MESSENGER_INIT, "RequestInitFriendsEvent");
    }
}