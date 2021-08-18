import { Module } from '@nestjs/common';
import { ConfigurationManager } from './Configuration.manager';

@Module({
    providers: [
        ConfigurationManager
    ],
    exports: [
        ConfigurationManager
    ]
})
export class ConfigurationModule {}