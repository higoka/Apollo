import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/Core/Configuration/Configuration.module';
import { GameclientModule } from 'src/Games/GameClient/Gameclient.module';
import { HabboModule } from 'src/Games/User/Habbo.module';
import { MessagesModule } from 'src/Messages/Messages.module';
import { FlashNetworkingService } from './FlashNetworking.service';

@Module({
    imports: [
        ConfigurationModule,
        MessagesModule,
        GameclientModule
    ],
    providers: [
        FlashNetworkingService
    ],
    exports: [
        FlashNetworkingService
    ]
})
export class FlashNetworkingModule {}