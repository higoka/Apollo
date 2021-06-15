import { Injectable } from "@nestjs/common";
import { GameclientDefs } from "./Gameclient.defs";

@Injectable()
export class GameclientService {
    public users: Map<string, GameclientDefs> = null;

    constructor() {
        this.users = new Map<string, GameclientDefs>();
    }

    public addUser(id: string, ws: any): boolean {
        var gc: GameclientDefs = new GameclientDefs(ws);
        return this.users.set(id, gc) == null;
    }

    public get userCounter(): number {
        return this.users.size;
    }
}