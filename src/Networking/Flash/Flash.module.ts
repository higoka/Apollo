import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/Core/Configuration/Configuration.module';
import { GameClientModule } from 'src/HabboHotel/GameClient/GameClient.module';
import { MessageModule } from 'src/Message/Message.module';
import { FlashManager } from './Flash.manager';

@Module({
    imports: [
        MessageModule,
        GameClientModule,
        ConfigurationModule
    ],
    providers: [
        FlashManager
    ],
    exports: [
        FlashManager
    ]
})
export class FlashModule {}