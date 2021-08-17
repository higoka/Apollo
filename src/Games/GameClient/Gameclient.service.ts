import { Injectable, Logger } from "@nestjs/common";
import * as ws from "ws";
import * as net from "net";
import { HabboDefs } from "../User/Habbo.defs";
import { GameclientDefs } from "./Gameclient.defs";

@Injectable()
export class GameclientService {
    private readonly logger = new Logger(GameclientService.name);
    public users: Map<number, GameclientDefs>;

    constructor() {
        this.users = new Map<number, GameclientDefs>();
    }

    public addUser(id: number, socket: ws | net.Socket): boolean {
        var gc: GameclientDefs = new GameclientDefs(socket, id);
        return this.users.set(id, gc) == null;
    }

    public getHabbo(userId: number): HabboDefs {
        for (var client of this.users.values()) {
            if (client.habbo == null) {
                continue;
            }

            if (client.habbo.habboInfo.id == userId) {
                return client.habbo;
            }
        }

        return null;
    }

    public getHabboByUsername(username: string): HabboDefs {
        for (var client of this.users.values()) {
            if (client.habbo == null) {
                continue;
            }

            if (client.habbo.habboInfo.username == username) {
                return client.habbo;
            }
        }

        return null;
    }

    public destroyAll(): void {
        for (var user of this.users.values()) {
            user.destroy(this);
        }
        this.users.clear();
        this.logger.log("Deleted all client");
    }

    public get userCounter(): number {
        return this.users.size;
    }
}