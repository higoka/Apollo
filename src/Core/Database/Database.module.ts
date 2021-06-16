import { Module } from '@nestjs/common';
import { ConfigurationModule } from '../Configuration/Configuration.module';
import { DatabaseProvider } from './Database.provider';

@Module({
    imports: [
        ConfigurationModule
    ],
    providers: [
        DatabaseProvider
    ],
    exports: [
        DatabaseProvider
    ]
})
export class DatabaseModule {}