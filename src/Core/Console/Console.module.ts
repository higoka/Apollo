import { Module } from '@nestjs/common';
import { FlashModule } from 'src/Networking/Flash/Flash.module';
import { NitroModule } from 'src/Networking/Nitro/Nitro.module';
import { PluginModule } from '../Plugin/Plugin.module';
import { ConsoleManager } from './Console.manager';

@Module({
    imports: [
        PluginModule,
        NitroModule,
        FlashModule
    ],
    providers: [
        ConsoleManager
    ],
    exports: [
        ConsoleManager
    ]
})
export class ConsoleModule {}