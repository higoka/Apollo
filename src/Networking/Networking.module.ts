import { Module } from '@nestjs/common';
import { MessagesModule } from 'src/Messages/Messages.module';
import { DataEncoder } from './Encoder/Data.encoder';
import { NetworkingProvider } from './Networking.provider';

@Module({
    imports: [
        MessagesModule
    ],
    providers: [
        ...NetworkingProvider,
        DataEncoder
    ],
    exports: [
        DataEncoder
    ]
})
export class NetworkingModule {}