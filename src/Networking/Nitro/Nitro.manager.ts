import * as ws from "ws";
import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { ApolloManager } from "src/Apollo.manager";

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
            socket.binaryType = 'arraybuffer';
            socket.onmessage = (incoming: ws.MessageEvent) => {
                
            }
            socket.onclose = (event: ws.CloseEvent) => {
                
            }
        })

        this.logger.log("Started GameServer for Nitro on " + this.apolloManager.CoreManager.ConfigurationManager.getString("game.tcp.ip") + ":" + this.apolloManager.CoreManager.ConfigurationManager.getInt("game.tcp.port_nitro"));
    }
}