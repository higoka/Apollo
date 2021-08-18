import { forwardRef, Module } from '@nestjs/common';
import { ApolloManager } from './Apollo.manager';
import { CoreModule } from './Core/Core.module';
import { GameModule } from './HabboHotel/Game.module';
import { MessageModule } from './Message/Message.module';
import { NetworkingModule } from './Networking/Networking.module';

@Module({
    imports: [
        forwardRef(() => CoreModule),
        forwardRef(() => NetworkingModule),
        forwardRef(() => GameModule),
        forwardRef(() => MessageModule)
    ],
    providers: [
        ApolloManager
    ],
    exports: [
        ApolloManager
    ]
})
export class ApolloModule {}