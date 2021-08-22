import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/Core/Configuration/Configuration.module';
import { PluginModule } from 'src/Core/Plugin/Plugin.module';
import { HabboModule } from 'src/HabboHotel/Habbo/Habbo.module';
import { MessageManager } from './Message.manager';

@Module({
    imports: [
        ConfigurationModule,
        HabboModule,
        PluginModule
    ],
    providers: [
        MessageManager
    ],
    exports: [
        MessageManager
    ]
})
export class MessageModule {}