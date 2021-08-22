import * as ws from "ws";
import * as net from "net";
import { Injectable } from '@nestjs/common';
import { GameClientDefs } from './GameClient.defs';

@Injectable()
export class GameClientManager {
    private users: Map<number, GameClientDefs>;
    private lastConnectionId: number = 1;

    constructor() {
        this.users = new Map<number, GameClientDefs>();
    }

    public addUser(id: number, socket: ws | net.Socket): boolean {
        var gc: GameClientDefs = new GameClientDefs(socket);
        return this.users.set(id, gc) == null;
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

    public get userCounter(): number {
        return this.users.size;
    }

    public getUser(connectionId: number): GameClientDefs {
        return this.users.get(connectionId);
    }
}