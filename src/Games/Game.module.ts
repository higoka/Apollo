import { Module } from '@nestjs/common';
import { GameclientModule } from './GameClient/Gameclient.module';
import { HabboModule } from './User/Habbo.module';

@Module({
    imports: [
        GameclientModule,
        HabboModule
    ]
})
export class GameModule {}