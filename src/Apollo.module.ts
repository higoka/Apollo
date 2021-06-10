import { Module } from '@nestjs/common';
import { CoreModule } from './Core/Core.module';
import { GameModule } from './Games/Game.module';
import { NetworkingModule } from './Networking/Networking.module';

@Module({
    imports: [
        NetworkingModule,
        CoreModule,
        GameModule
    ]
})
export class ApolloModule {}