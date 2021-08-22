import { Module } from '@nestjs/common';
import { ConfigurationModule } from '../Configuration/Configuration.module';
import { DatabaseManager } from "./Database.manager";

@Module({
    imports: [
        ConfigurationModule
    ],
    providers: [
        DatabaseManager
    ],
    exports: [
        DatabaseManager
    ]
})
export class DatabaseModule {}