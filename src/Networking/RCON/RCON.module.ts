import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/Core/Configuration/Configuration.module';
import { GameClientModule } from 'src/HabboHotel/GameClient/GameClient.module';
import { RCONManager } from './RCON.manager';

@Module({
    imports: [
        ConfigurationModule,
        GameClientModule
    ],
    providers: [
        RCONManager
    ],
    exports: [
        RCONManager
    ]
})
export class RCONModule {}