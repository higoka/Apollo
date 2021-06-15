import { Module } from '@nestjs/common';
import { GameclientModule } from 'src/Games/GameClient/Gameclient.module';
import { MessagesModule } from 'src/Messages/Messages.module';
import { DataEncoder } from './Encoder/Data.encoder';
import { NetworkingProvider } from './Networking.provider';

@Module({
    imports: [
        MessagesModule,
        GameclientModule
    ],
    providers: [
        NetworkingProvider,
        DataEncoder
    ],
    exports: [
        DataEncoder,
        NetworkingProvider
    ]
})
export class NetworkingModule {}