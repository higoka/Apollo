import { forwardRef, Module } from '@nestjs/common';
import { ApolloModule } from 'src/Apollo.module';
import { GameManager } from './Game.manager';
import { GameClientModule } from './GameClient/GameClient.module';
import { HabboModule } from './Habbo/Habbo.module';

@Module({
    imports: [
        forwardRef(() => ApolloModule),
        forwardRef(() => HabboModule),
        forwardRef(() => GameClientModule),
    ],
    providers: [
        GameManager
    ],
    exports: [
        GameManager
    ]
})
export class GameModule {}