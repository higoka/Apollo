import { Module } from '@nestjs/common';
import { HabboModule } from 'src/Games/User/Habbo.module';
import { SecureLoginEvent } from './Incoming/Handshake/SecureLoginEvent';
import { MessagesService } from './Messages.service';

@Module({
    imports: [
        HabboModule
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