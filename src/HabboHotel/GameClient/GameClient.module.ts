import { Module } from '@nestjs/common';
import { GameClientManager } from './GameClient.manager';

@Module({
    providers: [
        GameClientManager
    ],
    exports: [
        GameClientManager
    ]
})
export class GameClientModule {}