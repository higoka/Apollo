import * as ws from "ws";
import * as net from "net";
import { Injectable } from '@nestjs/common';
import { GameClientDefs } from './GameClient.defs';
import { OutgoingPacket } from "src/Message/Outgoing/Outgoing.packet";
import { HabboDefs } from "../Habbo/Habbo.defs";

@Injectable()
export class GameClientManager {
    private clients: Map<number, GameClientDefs>;
    private lastConnectionId: number = 1;

    constructor() {
        this.clients = new Map<number, GameClientDefs>();
    }

    public addUser(id: number, socket: ws | net.Socket): boolean {
        var gc: GameClientDefs = new GameClientDefs(socket);
        return this.clients.set(id, gc) == null;
    }

    public get LastConnectionId(): number {
        return this.lastConnectionId;
    }

    public updateConnectionId(state: string): void {
        switch (state) {
            case 'connection':
                this.lastConnectionId++;
            break;
            case 'disconnection':
                this.lastConnectionId--;
            break;
        }
    }

    public sendToAll(message: OutgoingPacket | Array<OutgoingPacket>): void {
        for (var client of this.clients.values()) {
            client.send(message);
        }
    }

    public get userCounter(): number {
        return this.clients.size;
    }

    public getUser(connectionId: number): GameClientDefs {
        return this.clients.get(connectionId);
    }

    public getHabbo(userId: number): HabboDefs {
        for (var client of this.clients.values()) {
            if (client.getHabbo == null) {
                continue;
            }

            if (client.getHabbo.getHabboData.getId == userId) {
                return client.getHabbo;
            }
        }
    }
}