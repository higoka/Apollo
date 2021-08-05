import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/Core/Configuration/Configuration.module';
import { GameclientModule } from 'src/Games/GameClient/Gameclient.module';
import { MessagesModule } from 'src/Messages/Messages.module';
import { NetworkingService } from './Networking.service';

@Module({
    imports: [
        ConfigurationModule,
        MessagesModule,
        GameclientModule
    ],
    providers: [
        NetworkingService
    ],
    exports: [
        NetworkingService
    ]
})
export class NetworkingModule {}