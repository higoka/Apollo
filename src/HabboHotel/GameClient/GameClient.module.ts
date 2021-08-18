import { forwardRef, Module } from '@nestjs/common';
import { ApolloModule } from 'src/Apollo.module';
import { GameClientManager } from './GameClient.manager';

@Module({
    imports: [
        forwardRef(() => ApolloModule)
    ],
    providers: [
        GameClientManager
    ],
    exports: [
        GameClientManager
    ]
})
export class GameClientModule {}