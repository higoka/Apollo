import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/Core/Configuration/Configuration.module';
import { HabboModule } from 'src/Games/User/Habbo.module';
import { PingEvent } from './Incoming/Handshake/PingEvent';
import { ReleaseVersionEvent } from './Incoming/Handshake/ReleaseVersionEvent';
import { SecureLoginEvent } from './Incoming/Handshake/SecureLoginEvent';
import { RequestUserDataEvent } from './Incoming/User/RequestUserDataEvent';
import { MessagesService } from './Messages.service';

@Module({
    imports: [
        HabboModule,
        ConfigurationModule
    ],
    providers: [
        MessagesService,
        ReleaseVersionEvent,
        SecureLoginEvent,
        PingEvent,
        RequestUserDataEvent
    ],
    exports: [
        MessagesService
    ]
})
export class MessagesModule {}