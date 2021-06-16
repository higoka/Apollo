import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/Core/Configuration/Configuration.module';
import { GameclientModule } from 'src/Games/GameClient/Gameclient.module';
import { MessagesModule } from 'src/Messages/Messages.module';
import { NetworkingProvider } from './Networking.provider';

@Module({
    imports: [
        ConfigurationModule,
        MessagesModule,
        GameclientModule
    ],
    providers: [
        NetworkingProvider
    ],
    exports: [
        NetworkingProvider
    ]
})
export class NetworkingModule {}