import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/Core/Configuration/Configuration.module';
import { GameclientModule } from 'src/Games/GameClient/Gameclient.module';
import { MessagesModule } from 'src/Messages/Messages.module';
import { NitroNetworkingService } from './NitroNetworking.service';

@Module({
    imports: [
        ConfigurationModule,
        MessagesModule,
        GameclientModule
    ],
    providers: [
        NitroNetworkingService
    ],
    exports: [
        NitroNetworkingService
    ]
})
export class NitroNetworkingModule {}