import { Response } from "express";
import { GameClientManager } from "src/HabboHotel/GameClient/GameClient.manager";
import { HabboDefs } from "src/HabboHotel/Habbo/Habbo.defs";
import { RCONMessageInterface } from "./RCONMessage.interface";

export class DisconnectUserMessage implements RCONMessageInterface {
    private gameClientManager: GameClientManager;

    constructor(gameClientManager: GameClientManager) {
        this.gameClientManager = gameClientManager;
    }

    handle(data: any, response: Response): void {
        var habbo: HabboDefs = this.gameClientManager.getHabbo(data.user_id);

        if (habbo == null) {
            response.json({
                'statusType': 'error',
                'message': 'User not found'
            });
            return;
        }

        habbo.disconnect(habbo.getClient.getChannel);
        response.json({
            'statusType': 'success',
            'message': habbo.getHabboData.getUsername + ' disconnected!'
        });
    }
}