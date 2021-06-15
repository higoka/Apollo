import { Module } from '@nestjs/common';
import { InPacket } from './Incoming/In.packet';
import { MessagesService } from './Messages.service';
import { OutPacket } from './Outgoing/Out.packet';

@Module({
    providers: [
        MessagesService
    ],
    exports: [
        MessagesService
    ]
})
export class MessagesModule {}