import { Module } from '@nestjs/common';
import { FlashModule } from 'src/Networking/Flash/Flash.module';
import { NitroModule } from 'src/Networking/Nitro/Nitro.module';
import { RCONModule } from 'src/Networking/RCON/RCON.module';
import { PluginModule } from '../Plugin/Plugin.module';
import { ConsoleManager } from './Console.manager';

@Module({
    imports: [
        PluginModule,
        NitroModule,
        FlashModule,
        RCONModule
    ],
    providers: [
        ConsoleManager
    ],
    exports: [
        ConsoleManager
    ]
})
export class ConsoleModule {}