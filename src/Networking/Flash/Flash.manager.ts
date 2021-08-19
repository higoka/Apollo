import * as net from "net";
import { forwardRef, Inject, Injectable, Logger } from "@nestjs/common";
import { ApolloManager } from "src/Apollo.manager";
import { IncomingPacket } from "src/Message/Incoming/Incoming.packet";

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
        var connectionId: number = 1;

        this.server.on('connection', (socket: net.Socket) => {
            self.apolloManager.GameManager.GameClientManager.addUser(connectionId, socket);
            socket.on('connect', () => {
                connectionId++;
            })
            socket.on('data', (data: Buffer) => {
                
            })
            socket.on('close', (err: boolean) => {
                
            })
        })

        this.server.listen(this.apolloManager.CoreManager.ConfigurationManager.getString("game.tcp.port_flash"));

        this.logger.log("Started GameServer for Flash on " + this.apolloManager.CoreManager.ConfigurationManager.getString("game.tcp.ip") + ":" + this.apolloManager.CoreManager.ConfigurationManager.getInt("game.tcp.port_flash"));
    }
}