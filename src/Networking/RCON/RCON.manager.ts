import * as http from "http";
import * as url from "url";
import * as net from "net";
import { Injectable, Logger } from '@nestjs/common';
import { RCONMessageInterface } from "src/Message/RCON/RCONMessage.interface";
import { ConfigurationManager } from "src/Core/Configuration/Configuration.manager";
import { DisconnectUserMessage } from "src/Message/RCON/DisconnectUser.message";
import { GameClientManager } from "src/HabboHotel/GameClient/GameClient.manager";

@Injectable()
export class RCONManager {
    private readonly logger = new Logger(RCONManager.name);
    private server: http.Server;
    private rconMessage: Map<string, RCONMessageInterface>;

    constructor(
        private readonly configurationManager: ConfigurationManager,
        private readonly gameClientManager: GameClientManager
    ) {
        this.rconMessage = new Map<string, RCONMessageInterface>();

        this.setMessage();
        this.init();
    }

    private init(): void {
        this.server = http.createServer();
        this.server.on('request', (request: http.IncomingMessage, response: http.ServerResponse) => {
            if (!this.configurationManager.getString('rcon.ip_whitelist').split(",")[request.socket.remoteAddress] == null) {
                return;
            }

            var { pathname, query } = url.parse(request.url);

            response.setHeader['content-type'] = 'application/json';
            if (pathname.includes('disconnect')) {
                this.handleRCONMessage({
                    key: 'disconnect',
                    data: {
                        user_id: query.split('=')[1]
                    }
                }, response);
            }
        })

        this.server.listen(this.configurationManager.getInt('rcon.port'));

        this.logger.log("Started RCONServer on " + this.configurationManager.getString("game.tcp.ip") + ":" + this.configurationManager.getInt("rcon.port"));
    }

    private setMessage(): void {
        this.rconMessage.set('disconnect', new DisconnectUserMessage(this.gameClientManager))
    }

    public handleRCONMessage(message: any, response: http.ServerResponse): void {
        if (this.rconMessage.has(message.key)) {
            if (this.configurationManager.getBoolean('rcon.message_log')) {
                this.logger.log("RCON message executed: " + message.key);
            }
            this.rconMessage.get(message.key).handle(message.data, response);
        } else {
            if (this.configurationManager.getBoolean('rcon.message_log')) {
                this.logger.log("RCON message unrecognized: " + message.key);
            }
        }
    }
}