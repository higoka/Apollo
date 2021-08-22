import { Module } from '@nestjs/common';
import { ConfigurationModule } from './Configuration/Configuration.module';
import { ConsoleModule } from './Console/Console.module';
import { CoreManager } from './Core.manager';
import { DatabaseModule } from './Database/Database.module';
import { PluginModule } from './Plugin/Plugin.module';

@Module({
    imports: [
        ConfigurationModule,
        DatabaseModule,
        PluginModule,
        ConsoleModule
    ],
    providers: [
        CoreManager
    ],
    exports: [
        CoreManager
    ]
})
export class CoreModule {}