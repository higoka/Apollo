import { Module } from '@nestjs/common';
import { NetworkingProvider } from './Networking.provider';

@Module({
    providers: [
        ...NetworkingProvider,
    ]
})
export class NetworkingModule {}