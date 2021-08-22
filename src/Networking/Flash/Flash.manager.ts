import * as net from "net";
import { Injectable, Logger } from "@nestjs/common";
import { GameClientManager } from "src/HabboHotel/GameClient/GameClient.manager";
import { IncomingPacket } from "src/Message/Incoming/Incoming.packet";
import { GameClientDefs } from "src/HabboHotel/GameClient/GameClient.defs";
import { MessageManager } from "src/Message/Message.manager";
import { ConfigurationManager } from "src/Core/Configuration/Configuration.manager";

@Injectable()
export class FlashManager {
    private readonly logger = new Logger(FlashManager.name);
    private server: net.Server;

    constructor(
        private readonly gameClientManager: GameClientManager,
        private readonly messageManager: MessageManager,
        private readonly configurationManager: ConfigurationManager
    ) {
        this.server = net.createServer();

        var self = this;

        this.server.on('connection', (socket: net.Socket) => {
            var gcm: GameClientManager = self.gameClientManager;
            gcm.addUser(gcm.LastConnectionId, socket);
            socket.on('connect', () => {
                gcm.updateConnectionId('connection');
            })
            socket.on('data', (data: Buffer) => {
                var packet: IncomingPacket = new IncomingPacket(data.buffer);
                packet.readInt();
                var opcode: number = packet.readShort();
                if (opcode == 26979) {
                    var xml: string = "<?xml version=\"1.0\"?>" +
                    "  <!DOCTYPE cross-domain-policy SYSTEM \"/xml/dtds/cross-domain-policy.dtd\">\n" +
                    "  <cross-domain-policy>" +
                    "  <allow-access-from domain=\"*\" to-ports=\"1-31111\" />" +
                    "  </cross-domain-policy>";

                    socket.write(Buffer.from(xml, 'utf8'), (err: Error) => {
                        socket.end();
                    });
                }
                packet.opcode = opcode;
                var gameClient: GameClientDefs = gcm.getUser(gcm.LastConnectionId);
                self.messageManager.execute(gameClient, packet, 'FLASH');
            })
            socket.on('close', (err: boolean) => {
                var gameClient: GameClientDefs = gcm.getUser(gcm.LastConnectionId);
                gameClient.destroy();
                gcm.updateConnectionId('disconnection');
            })
        })

        this.server.listen(this.configurationManager.getString("game.tcp.port_flash"));

        this.logger.log("Started GameServer for Flash on " + this.configurationManager.getString("game.tcp.ip") + ":" + this.configurationManager.getInt("game.tcp.port_flash"));
    }
}