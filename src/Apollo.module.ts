import { Module } from '@nestjs/common';
import { CoreModule } from './Core/Core.module';
import { GameModule } from './HabboHotel/Game.module';
import { MessageModule } from './Message/Message.module';
import { FlashModule } from './Networking/Flash/Flash.module';
import { NitroModule } from './Networking/Nitro/Nitro.module';
import { RCONModule } from './Networking/RCON/RCON.module';

@Module({
    imports: [
        CoreModule,
        GameModule,
        MessageModule,
        NitroModule,
        FlashModule,
        RCONModule
    ]
})
export class ApolloModule {}