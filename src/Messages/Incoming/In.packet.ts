declare var TextDecoder: any;
import { Injectable } from '@nestjs/common'

@Injectable()
export class InPacket {
    private position: number;
    private dataView: DataView;
    private head: number;

    constructor(buffer: ArrayBuffer) {
        this.position = 0;
        this.dataView = new DataView(buffer);
    }

    public set header(header: number) {
        this.head = header;
    }

    public get header() {
        return this.head;
    }

    public readByte(): number {
        const byte = this.dataView.getInt8(this.position);

        this.position++;

        return byte;
    }

    public readBytes(length: number): InPacket {
        const buffer = new InPacket(this.dataView.buffer.slice(this.position, this.position + length));

        this.position += length;

        return buffer;
    }

    public readString(): string {
        const length = this.readShort();
        const buffer = this.readBytes(length);

        return buffer.toString('utf-8');
    }

    public readShort(): number {
        const short = this.dataView.getInt16(this.position);

        this.position += 2;

        return short;
    }

    public readInt(): number {
        const int = this.dataView.getInt32(this.position);

        this.position += 4;

        return int;
    }

    public remaining(): number {
        return this.dataView.byteLength - this.position;
    }

    public toString(encoding?: string): string {
        return new TextDecoder(encoding).decode(this.dataView.buffer);
    }

    public toArrayBuffer(): ArrayBuffer {
        return this.dataView.buffer;
    }
}