import { Module } from '@nestjs/common';
import { InPacket } from './Incoming/In.packet';
import { MessagesService } from './Messages.service';
import { OutPacket } from './Outgoing/Out.packet';

@Module({
    providers: [
        InPacket,
        OutPacket,
        MessagesService
    ],
    exports: [
        InPacket,
        OutPacket,
        MessagesService
    ]
})
export class MessagesModule {}