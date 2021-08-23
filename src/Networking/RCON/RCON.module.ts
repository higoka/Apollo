import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/Core/Configuration/Configuration.module';
import { RCONManager } from './RCON.manager';

@Module({
    imports: [
        ConfigurationModule
    ],
    providers: [
        RCONManager
    ],
    exports: [
        RCONManager
    ]
})
export class RCONModule {}