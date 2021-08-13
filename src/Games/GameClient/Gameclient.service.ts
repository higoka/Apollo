import { Injectable } from "@nestjs/common";
import { HabboDefs } from "../User/Habbo.defs";
import { GameclientDefs } from "./Gameclient.defs";

@Injectable()
export class GameclientService {
    public users: Map<string, GameclientDefs>;

    constructor() {
        this.users = new Map<string, GameclientDefs>();
    }

    public addUser(id: string, ws: any): boolean {
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