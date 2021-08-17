import { Injectable, Logger } from "@nestjs/common";
import { ConfigurationService } from "src/Core/Configuration/Configuration.service";
import { GameclientDefs } from "src/Games/GameClient/Gameclient.defs";
import { GameclientService } from "src/Games/GameClient/Gameclient.service";
import { InPacket } from "src/Messages/Incoming/In.packet";
import { MessagesService } from "src/Messages/Messages.service";
import * as ws from "ws";

@Injectable()
export class NitroNetworkingService {
    private readonly logger = new Logger(NitroNetworkingService.name);
    private server: ws.Server;

    constructor(
        private readonly configurationService: ConfigurationService,
        private readonly messagesService: MessagesService,
        private readonly gameclientService: GameclientService
    ) {
        var server: ws.Server = new ws.Server({
            host: this.configurationService.getString("game.tcp.ip"),
            port: this.configurationService.getInt("game.tcp.port_nitro")
        });
        this.server = server;

        var self = this;

        server.on('connection', function connection(ws: ws) {
            var id: number = Math.floor(Math.random() * 1000);
            self.gameclientService.addUser(id, ws);

            ws.binaryType = 'arraybuffer';
            ws.onmessage = function(incoming: ws.MessageEvent) {
                var inPacket: InPacket = new InPacket(incoming.data);
                inPacket.readInt();
                var packetId: number = inPacket.readShort();
                inPacket.header = packetId;
                var gameClient: GameclientDefs = self.gameclientService.users.get(id);
                self.messagesService.handlePacket(gameClient, inPacket, 'NITRO');
            }
            ws.onclose = function(event: ws.CloseEvent) {
                if (event.code == 1001) {
                    self.gameclientService.users.get(id).destroy(self.gameclientService);
                }
            }
        });
        this.logger.log("Started GameServer for Nitro on " + this.configurationService.getString("game.tcp.ip") + ":" + this.configurationService.getInt("game.tcp.port_nitro"));
    }

    public destroy(): void {
        this.logger.log("GameServer for Nitro successfully stopped");
        this.server.close();
    }
}