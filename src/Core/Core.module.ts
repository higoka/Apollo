import { Module } from '@nestjs/common';
import { ConfigurationModule } from './Configuration/Configuration.module';
import { ConsoleModule } from './Console/Console.module';
import { DatabaseModule } from './Database/Database.module';

@Module({
    imports: [
        ConfigurationModule,
        DatabaseModule,
        ConsoleModule
    ]
})
export class CoreModule {}