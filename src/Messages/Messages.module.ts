import { Module } from '@nestjs/common';
import { InPacket } from './Incoming/In.packet';
import { OutPacket } from './Outgoing/Out.packet';

@Module({
    providers: [
        InPacket,
        OutPacket
    ],
    exports: [
        InPacket,
        OutPacket
    ]
})
export class MessagesModule {}