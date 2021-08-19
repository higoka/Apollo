export class IncomingPacket {
    private position: number;
    private dataView: DataView;
    private head: number;

    constructor(buffer: ArrayBufferLike) {
        this.position = 0;
        this.dataView = new DataView(buffer);
    }

    public set opcode(opcode: number) {
        this.head = opcode;
    }

    public get opcode() {
        return this.head;
    }

    public readByte(): number {
        const byte = this.dataView.getInt8(this.position);

        this.position++;

        return byte;
    }

    public readBytes(length: number): IncomingPacket {
        const buffer = new IncomingPacket(this.dataView.buffer.slice(this.position, this.position + length));

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

    public get remaining(): number {
        return this.dataView.byteLength - this.position;
    }

    public toString(encoding?: string): string {
        return new TextDecoder(encoding).decode(this.dataView.buffer);
    }

    public get ArrayBuffer(): ArrayBuffer {
        return this.dataView.buffer;
    }
}