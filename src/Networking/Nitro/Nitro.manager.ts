import * as ws from "ws";
import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { ApolloManager } from "src/Apollo.manager";
import { IncomingPacket } from "src/Message/Incoming/Incoming.packet";
import { GameClientDefs } from "src/HabboHotel/GameClient/GameClient.defs";
import { GameClientManager } from "src/HabboHotel/GameClient/GameClient.manager";

@Injectable()
export class NitroManager {
    private readonly logger = new Logger(NitroManager.name);
    private server: ws.Server;

    constructor(
        @Inject(forwardRef(() => ApolloManager))
        private readonly apolloManager: ApolloManager
    ) {
        this.server = new ws.Server({
            host: this.apolloManager.CoreManager.ConfigurationManager.getString("game.tcp.ip"),
            port: this.apolloManager.CoreManager.ConfigurationManager.getInt("game.tcp.port_nitro")
        })

        var self = this;

        this.server.on('connection', function connection(socket: ws) {
            var gcm: GameClientManager = self.apolloManager.GameManager.GameClientManager;
            gcm.addUser(gcm.LastConnectionId, socket);
            socket.binaryType = 'arraybuffer';
            socket.onopen = () => {
                gcm.updateConnectionId('connection');
            }
            socket.onmessage = (incoming: ws.MessageEvent) => {
                if (incoming.data instanceof ArrayBuffer) {
                    var packet: IncomingPacket = new IncomingPacket(incoming.data);
                    packet.readInt();
                    var opcode: number = packet.readShort();
                    packet.opcode = opcode;
                    var gameClient: GameClientDefs = gcm.getUser(gcm.LastConnectionId);
                    self.apolloManager.MessageManager.execute(gameClient, packet, 'NITRO');
                }
            }
            socket.onclose = (event: ws.CloseEvent) => {
                var gameClient: GameClientDefs = gcm.getUser(gcm.LastConnectionId);
                gameClient.destroy();
                gcm.updateConnectionId('disconnection');
            }
        })

        this.logger.log("Started GameServer for Nitro on " + this.apolloManager.CoreManager.ConfigurationManager.getString("game.tcp.ip") + ":" + this.apolloManager.CoreManager.ConfigurationManager.getInt("game.tcp.port_nitro"));
    }
}