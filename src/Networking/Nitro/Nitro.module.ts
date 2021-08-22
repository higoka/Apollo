import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/Core/Configuration/Configuration.module';
import { GameClientModule } from 'src/HabboHotel/GameClient/GameClient.module';
import { MessageModule } from 'src/Message/Message.module';
import { NitroManager } from './Nitro.manager';

@Module({
    imports: [
        MessageModule,
        GameClientModule,
        ConfigurationModule
    ],
    providers: [
        NitroManager
    ],
    exports: [
        NitroManager
    ]
})
export class NitroModule {}