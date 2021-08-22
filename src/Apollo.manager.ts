import { Injectable } from '@nestjs/common';
import { CoreManager } from './Core/Core.manager';
import { GameManager } from './HabboHotel/Game.manager';
import { MessageManager } from './Message/Message.manager';
import { NetworkingManager } from './Networking/Networking.manager';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class ApolloManager {
    constructor(
        private readonly coreManager: CoreManager,
        private readonly networkingManager: NetworkingManager,
        private readonly messageManager: MessageManager,
        private readonly gameManager: GameManager,
        private readonly eventEmitter: EventEmitter2
    ) {

    }

    public get EventEmitter(): EventEmitter2 {
        return this.eventEmitter;
    }

    public get GameManager(): GameManager {
        return this.gameManager;
    }

    public get MessageManager(): MessageManager {
        return this.messageManager;
    }

    public get CoreManager(): CoreManager {
        return this.coreManager;
    }

    public get NetworkingManager(): NetworkingManager {
        return this.networkingManager;
    }
}