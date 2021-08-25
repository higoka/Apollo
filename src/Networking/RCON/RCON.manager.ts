import * as express from 'express';
import * as http from "http";
import { Injectable, Logger } from '@nestjs/common';
import { ConfigurationManager } from "src/Core/Configuration/Configuration.manager";
import { GameClientManager } from "src/HabboHotel/GameClient/GameClient.manager";
import { RCONMessageInterface } from 'src/Message/RCON/RCONMessage.interface';
import { DisconnectUserMessage } from 'src/Message/RCON/DisconnectUser.message';

@Injectable()
export class RCONManager {
    private readonly logger = new Logger(RCONManager.name);
    private rconMessage: Map<string, RCONMessageInterface>;
    private server: http.Server;

    constructor(
        private readonly configurationManager: ConfigurationManager,
        private readonly gameClientManager: GameClientManager
    ) {
        
        this.rconMessage = new Map<string, RCONMessageInterface>();
        this.setMessage();
        this.init();
    }

    private init(): void {
        var api: express.Express = express();

        this.server = http.createServer(api);
        var router: express.Router = express.Router();
        router.all('/api/hotel', (req: express.Request, res: express.Response) => {
            var postData: any;
            if (req.method == 'POST') {
                postData = req.body;
            }

            var jsonData: any;
            if (postData == null) {
                jsonData = {
                    key: ''
                }
            } else if (postData.key == 'disconnect') {
                jsonData = {
                    key: postData.key,
                    data: {
                        user_id: postData.userId
                    }
                }
            }

            this.handleRCONMessage(jsonData, res);
        })
        api.use(express.urlencoded({ extended: true }));
        api.use(express.json());
        api.use(router);

        this.server.listen(this.configurationManager.getInt("rcon.port"));

        this.logger.log("Started RCONServer on " + this.configurationManager.getString("game.tcp.ip") + ":" + this.configurationManager.getInt("rcon.port"));
    }

    private setMessage(): void {
        this.rconMessage.set('disconnect', new DisconnectUserMessage(this.gameClientManager));
    }

    private handleRCONMessage(message: any, response: express.Response): any {
        if (this.rconMessage.has(message.key)) {
            if (this.configurationManager.getBoolean('rcon.message_log')) {
                this.logger.log("RCON message executed: " + message.key);
            }
            this.rconMessage.get(message.key).handle(message.data, response);
        } else {
            if (this.configurationManager.getBoolean('rcon.message_log')) {
                this.logger.log("RCON message unrecognized: " + message.key);
            }
            response.json({});
        }
    }
}