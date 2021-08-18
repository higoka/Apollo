import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GameClientManager } from './GameClient/GameClient.manager';
import { HabboManager } from './Habbo/Habbo.manager';

@Injectable()
export class GameManager {
    constructor(
        @Inject(forwardRef(() => HabboManager))
        private readonly habboManager: HabboManager,
        @Inject(forwardRef(() => GameClientManager))
        private readonly gameClientManager: GameClientManager
    ) {

    }

    public get HabboManager(): HabboManager {
        return this.habboManager;
    }

    public get GameClientManager(): GameClientManager {
        return this.gameClientManager;
    }
}