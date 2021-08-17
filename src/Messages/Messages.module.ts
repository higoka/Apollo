import { forwardRef, Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/Core/Configuration/Configuration.module';
import { EmulatorModule } from 'src/Core/Database/Emulator/Emulator.module';
import { GameModule } from 'src/Games/Game.module';
import { GameclientModule } from 'src/Games/GameClient/Gameclient.module';
import { NavigationModule } from 'src/Games/Navigation/Navigation.module';
import { HabboModule } from 'src/Games/User/Habbo.module';
import { MessagesService } from './Messages.service';

@Module({
    imports: [
        HabboModule,
        ConfigurationModule,
        GameclientModule,
        GameModule,
        EmulatorModule,
        NavigationModule
    ],
    providers: [
        MessagesService
    ],
    exports: [
        MessagesService
    ]
})
export class MessagesModule {}