import { GameclientService } from "src/Games/GameClient/Gameclient.service";
import { HabboDefs } from "src/Games/User/Habbo.defs";
import { MessageHandler } from "../message.handler";

export class RequestUserProfileEvent extends MessageHandler {
    private gameclientService: GameclientService;

    constructor(gameclientService: GameclientService) {
        super();

        this.gameclientService = gameclientService;
    }

    public handle(): void {
        var userId: number = this.entryPacket.readInt();

        var habbo: HabboDefs = this.gameclientService.getHabbo(userId);

        if (habbo != null) {

        } else {

        }
    }
}