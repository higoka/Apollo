import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/Core/Configuration/Configuration.module';
import { HabboModule } from 'src/Games/User/Habbo.module';
import { SecureLoginEvent } from './Incoming/Handshake/SecureLoginEvent';
import { MessagesService } from './Messages.service';

@Module({
    imports: [
        HabboModule,
        ConfigurationModule
    ],
    providers: [
        MessagesService,
        SecureLoginEvent
    ],
    exports: [
        MessagesService,
        SecureLoginEvent
    ]
})
export class MessagesModule {}