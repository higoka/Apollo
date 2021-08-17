import { Module } from '@nestjs/common';
import { GameclientModule } from 'src/Games/GameClient/Gameclient.module';
import { FlashNetworkingModule } from 'src/Networking/Flash/FlashNetworking.module';
import { NitroNetworkingModule } from 'src/Networking/Nitro/NitroNetworking.module';
import { ConsoleProvider } from './Console.provider';

@Module({
    imports: [
        NitroNetworkingModule,
        FlashNetworkingModule,
        GameclientModule
    ],
    providers: [
        ConsoleProvider
    ]
})
export class ConsoleModule {}