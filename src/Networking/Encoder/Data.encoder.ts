import { OutPacket } from 'src/Messages/Outgoing/Out.packet';

export class DataEncoder {
    private outPacket: OutPacket;

    constructor() {
        this.outPacket = new OutPacket();
    }

    public encode(header: number, messages: any[]): OutPacket {
        this.outPacket.writeShort(header);

        for(const value of messages)
        {
            let type: string = typeof value;

            switch(type)
            {
                case 'null':
                    this.outPacket.writeShort(0);
                break;
                case 'short':
                    this.outPacket.writeShort(value.value);
                break;
                case 'number':
                    this.outPacket.writeInt(value);
                break;
                case 'boolean':
                    this.outPacket.writeByte(value ? 1 : 0);
                break;
                case 'string':
                    if (!value)
                        this.outPacket.writeShort(0);
                    else {
                        this.outPacket.writeString(value, true);
                    }
                break;
            }
        }

        const buffer: ArrayBufferLike = this.outPacket.getBuffer;

        return new OutPacket().writeInt(buffer.byteLength).writeBytes(buffer);
    }
}