import * as net from "net";
import { forwardRef, Inject, Injectable, Logger } from "@nestjs/common";
import { ApolloManager } from "src/Apollo.manager";
import { GameClientManager } from "src/HabboHotel/GameClient/GameClient.manager";
import { IncomingPacket } from "src/Message/Incoming/Incoming.packet";
import { GameClientDefs } from "src/HabboHotel/GameClient/GameClient.defs";

@Injectable()
export class FlashManager {
    private readonly logger = new Logger(FlashManager.name);
    private server: net.Server;

    constructor(
        @Inject(forwardRef(() => ApolloManager))
        private readonly apolloManager: ApolloManager
    ) {
        this.server = net.createServer();

        var self = this;

        this.server.on('connection', (socket: net.Socket) => {
            var gcm: GameClientManager = self.apolloManager.GameManager.GameClientManager;
            gcm.addUser(gcm.LastConnectionId, socket);
            socket.on('connect', () => {
                gcm.updateConnectionId('connection');
            })
            socket.on('data', (data: Buffer) => {
                var packet: IncomingPacket = new IncomingPacket(data.buffer);
                packet.readInt();
                var opcode: number = packet.readShort();
                packet.opcode = opcode;
                var gameClient: GameClientDefs = gcm.getUser(gcm.LastConnectionId);
                self.apolloManager.MessageManager.execute(gameClient, packet, 'NITRO');
            })
            socket.on('close', (err: boolean) => {
                var gameClient: GameClientDefs = gcm.getUser(gcm.LastConnectionId);
                gameClient.destroy();
                gcm.updateConnectionId('disconnection');
            })
        })

        this.server.listen(this.apolloManager.CoreManager.ConfigurationManager.getString("game.tcp.port_flash"));

        this.logger.log("Started GameServer for Flash on " + this.apolloManager.CoreManager.ConfigurationManager.getString("game.tcp.ip") + ":" + this.apolloManager.CoreManager.ConfigurationManager.getInt("game.tcp.port_flash"));
    }
}