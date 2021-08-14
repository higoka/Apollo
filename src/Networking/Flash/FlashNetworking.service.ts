import { Injectable, Logger } from "@nestjs/common";
import * as net from "net";
import { ConfigurationService } from "src/Core/Configuration/Configuration.service";
import { GameclientService } from "src/Games/GameClient/Gameclient.service";
import { MessagesService } from "src/Messages/Messages.service";
import { InPacket } from "src/Messages/Incoming/In.packet";
import { GameclientDefs } from "src/Games/GameClient/Gameclient.defs";
import { ArrayBufferUtils } from "src/Utils/ArrayBufferUtils";
import { OutPacket } from "src/Messages/Outgoing/Out.packet";

@Injectable()
export class FlashNetworkingService {
    private readonly logger = new Logger(FlashNetworkingService.name);

    constructor(
        private readonly configurationService: ConfigurationService,
        private readonly messagesService: MessagesService,
        private readonly gameclientService: GameclientService
    ) {

        var server: net.Server = net.createServer();

        var self = this;

        server.on('connection', (socket: net.Socket) => {
            socket.id = Math.floor(Math.random() * 1000);
            self.gameclientService.addUser(socket.id, socket);

            socket.on('data', (data: Buffer) => {
                var ab: ArrayBuffer = ArrayBufferUtils.toArrayBuffer(data);
                var inPacket: InPacket = new InPacket(ab);
                inPacket.readInt();
                var packetId: number = inPacket.readShort();
                console.log(packetId);
                inPacket.header = packetId;
                if (packetId == 26979) {
                    var xml: string = "<?xml version=\"1.0\"?>" +
                    "  <!DOCTYPE cross-domain-policy SYSTEM \"/xml/dtds/cross-domain-policy.dtd\">\n" +
                    "  <cross-domain-policy>" +
                    "  <allow-access-from domain=\"*\" to-ports=\"1-31111\" />" +
                    "  </cross-domain-policy>";

                    socket.setEncoding('binary');
                    socket.write(Buffer.from(xml, 'utf8'));
                    socket.end();
                }
                var gameClient: GameclientDefs = self.gameclientService.users.get(socket.id);
                self.messagesService.handlePacket(gameClient, inPacket, 'FLASH');
            });
        });

        server.listen(this.configurationService.getString("game.tcp.port_flash"));
        
        this.logger.log("Started GameServer for Flash on " + this.configurationService.getString("game.tcp.ip") + ":" + this.configurationService.getInt("game.tcp.port_flash") + "");
    }
}