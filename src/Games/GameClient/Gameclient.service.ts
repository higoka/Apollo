import { Injectable, Logger } from "@nestjs/common";
import * as ws from "ws";
import * as net from "net";
import { HabboDefs } from "../User/Habbo.defs";
import { GameclientDefs } from "./Gameclient.defs";
import { HabboService } from "../User/Habbo.service";

@Injectable()
export class GameclientService {
    private readonly logger = new Logger(HabboService.name);
    public users: Map<string | number, GameclientDefs>;

    constructor() {
        this.users = new Map<string | number, GameclientDefs>();
    }

    public addUser(id: string | number, ws: ws | net.Socket): boolean {
        var gc: GameclientDefs = new GameclientDefs(ws);
        return this.users.set(id, gc) == null;
    }

    public getHabbo(userId: number): HabboDefs {
        this.users.forEach((client: GameclientDefs) => {
            if (client.habbo != null) {
                return;
            }

            if (client.habbo.habboInfo.id == userId) {
                return client.habbo;
            }
        });

        return null;
    }

    public getHabboByUsername(username: string): HabboDefs {
        this.users.forEach((client: GameclientDefs) => {
            if (client.habbo != null) {
                return;
            }

            if (client.habbo.habboInfo.username == username) {
                return client.habbo;
            }
        });

        return null;
    }

    public get userCounter(): number {
        return this.users.size;
    }
}