import * as http from "http";
import * as net from "net";
import { Injectable, Logger } from '@nestjs/common';
import { RCONMessageInterface } from "src/Message/RCON/RCONMessage.interface";
import { ConfigurationManager } from "src/Core/Configuration/Configuration.manager";

@Injectable()
export class RCONManager {
    private readonly logger = new Logger(RCONManager.name);
    private server: http.Server;
    private rconMessage: Map<string, RCONMessageInterface>;

    constructor(
        private readonly configurationManager: ConfigurationManager
    ) {
        this.rconMessage = new Map<string, RCONMessageInterface>();

        this.setMessage();
        this.init();
 
    }

    private init(): void {
        this.server = http.createServer();
        this.server.on('connection', (socket: net.Socket) => {
            socket.on('data', (data: string) => {
                var jsonData: any = JSON.parse(data);
                this.handleRCONMessage(jsonData);
            })
        })

        this.server.listen(this.configurationManager.getInt('rcon.port'));

        this.logger.log("Started RCONServer on " + this.configurationManager.getString("game.tcp.ip") + ":" + this.configurationManager.getInt("rcon.port"));
    }

    private setMessage(): void {
        
    }

    public handleRCONMessage(message: any): void {
        if (this.rconMessage.has(message.key)) {
            if (this.configurationManager.getBoolean('rcon.message_log')) {
                this.logger.log("RCON message executed: " + message.key);
            }
            this.rconMessage.get(message.key).read(message.data);
        }
    }
}