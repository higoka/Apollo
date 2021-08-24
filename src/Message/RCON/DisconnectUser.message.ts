import { ServerResponse } from "http";
import { GameClientManager } from "src/HabboHotel/GameClient/GameClient.manager";
import { HabboDefs } from "src/HabboHotel/Habbo/Habbo.defs";
import { RCONMessageInterface } from "./RCONMessage.interface";

export class DisconnectUserMessage implements RCONMessageInterface {
    private gameClientManager: GameClientManager;

    constructor(gameClientManager: GameClientManager) {
        this.gameClientManager = gameClientManager;
    }

    handle(data: any, response: ServerResponse): void {
        var habbo: HabboDefs = this.gameClientManager.getHabbo(data.user_id);

        if (habbo == null) {
            response.end(JSON.stringify({
                'statusType': 'error',
                'message': 'User not found'
            }, null, 2));
            return;
        }

        habbo.disconnect(habbo.getClient.getChannel);
        response.end(JSON.stringify({
            'statusType': 'success',
            'message': habbo.getHabboData.getUsername + ' disconnected!'
        }, null, 2));
    }
}