import { Module } from '@nestjs/common';
import { CoreModule } from './Core/Core.module';
import { GameModule } from './Games/Game.module';
import { FlashNetworkingModule } from './Networking/Flash/FlashNetworking.module';
import { NitroNetworkingModule } from './Networking/Nitro/NitroNetworking.module';

@Module({
    imports: [
        CoreModule,
        NitroNetworkingModule,
        FlashNetworkingModule,
        GameModule,
    ]
})
export class ApolloModule {}