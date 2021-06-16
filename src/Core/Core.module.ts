import { Module } from '@nestjs/common';
import { ConfigurationModule } from './Configuration/Configuration.module';
import { DatabaseModule } from './Database/Database.module';

@Module({
    imports: [
        ConfigurationModule,
        DatabaseModule
    ]
})
export class CoreModule {}