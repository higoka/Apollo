import { Module } from '@nestjs/common';
import { PluginModule } from '../Plugin/Plugin.module';
import { ConsoleManager } from './Console.manager';

@Module({
    imports: [
        PluginModule
    ],
    providers: [
        ConsoleManager
    ],
    exports: [
        ConsoleManager
    ]
})
export class ConsoleModule {}