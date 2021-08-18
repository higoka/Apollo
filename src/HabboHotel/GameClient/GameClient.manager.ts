import * as ws from "ws";
import * as net from "net";
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ApolloManager } from 'src/Apollo.manager';
import { GameClientDefs } from './GameClient.defs';

@Injectable()
export class GameClientManager {
    public users: Map<number, GameClientDefs>;

    constructor(
        @Inject(forwardRef(() => ApolloManager))
        private readonly apolloManager: ApolloManager
    ) {
        this.users = new Map<number, GameClientDefs>();
    }

    public addUser(id: number, socket: ws | net.Socket): boolean {
        var gc: GameClientDefs = new GameClientDefs(id, socket);
        return this.users.set(id, gc) == null;
    }

    public get userCounter(): number {
        return this.users.size;
    }
}