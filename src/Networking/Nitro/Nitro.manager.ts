import * as ws from "ws";
import { Injectable, Logger } from '@nestjs/common';
import { IncomingPacket } from "src/Message/Incoming/Incoming.packet";
import { GameClientDefs } from "src/HabboHotel/GameClient/GameClient.defs";
import { GameClientManager } from "src/HabboHotel/GameClient/GameClient.manager";
import { MessageManager } from "src/Message/Message.manager";
import { ConfigurationManager } from "src/Core/Configuration/Configuration.manager";

@Injectable()
export class NitroManager {
    private readonly logger = new Logger(NitroManager.name);
    private server: ws.Server;

    constructor(
        private readonly gameClientManager: GameClientManager,
        private readonly messageManager: MessageManager,
        private readonly configurationManager: ConfigurationManager
    ) {
        this.server = new ws.Server({
            host: this.configurationManager.getString("game.tcp.ip"),
            port: this.configurationManager.getInt("game.tcp.port_nitro")
        })

        var self = this;

        this.server.on('connection', function connection(socket: ws) {
            var gcm: GameClientManager = self.gameClientManager;
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
                    self.messageManager.execute(gameClient, packet, 'NITRO');
                }
            }
            socket.onclose = (event: ws.CloseEvent) => {
                var gameClient: GameClientDefs = gcm.getUser(gcm.LastConnectionId);
                gameClient.destroy();
                gcm.updateConnectionId('disconnection');
            }
        })

        this.logger.log("Started GameServer for Nitro on " + this.configurationManager.getString("game.tcp.ip") + ":" + this.configurationManager.getInt("game.tcp.port_nitro"));
    }
}