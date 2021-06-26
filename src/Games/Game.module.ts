import { Module } from '@nestjs/common';
import { GameclientModule } from './GameClient/Gameclient.module';
import { NavigationModule } from './Navigation/Navigation.module';
import { HabboModule } from './User/Habbo.module';

@Module({
    imports: [
        GameclientModule,
        HabboModule,
        NavigationModule
    ]
})
export class GameModule {}