export class OutgoingPacket {
    private buffer: Uint8Array;

    constructor(opcode?: number) {
        this.buffer = new Uint8Array();
        this.writeShort(opcode);
    }

    public writeByte(byte: number): this {
        const array = new Uint8Array(1);

        array[0] = byte;

        this.appendArray(array);

        return this;
    }

    public writeBytes(bytes: ArrayBuffer): this {
        const array = new Uint8Array(bytes);

        this.appendArray(array);

        return this;
    }

    public writeShort(short: number): this {
        const array = new Uint8Array(2);

        array[0] = short >> 8;
        array[1] = short & 0xFF;

        this.appendArray(array);

        return this;
    }

    public writeInt(integer: number): this {
        const array = new Uint8Array(4);

        array[0] = integer >> 24;
        array[1] = integer >> 16;
        array[2] = integer >> 8;
        array[3] = integer & 0xFF;

        this.appendArray(array);

        return this;
    }

    public writeBoolean(value: boolean): this {
        const array = new Uint8Array(1);

        array[0] = (value ? 1 : 0);

        this.appendArray(array);

        return this;
    }

    public writeString(string: string, includeLength: boolean = true): this {
        const array = new TextEncoder().encode(string);

        if (includeLength) {
            this.writeShort(array.length);
            this.appendArray(array);
        } else {
            this.appendArray(array);
        }

        return this;
    }

    private appendArray(array: Uint8Array): this {
        if (!array)
            return;

        const mergedArray: Uint8Array = new Uint8Array(this.buffer.length + array.length);

        mergedArray.set(this.buffer);
        mergedArray.set(array, this.buffer.length);

        this.buffer = mergedArray;
    }

    public get getBuffer(): ArrayBufferLike {
        return this.buffer.buffer;
    }

    public encode(): OutgoingPacket {
        const buffer: ArrayBufferLike = this.getBuffer;
        return new OutgoingPacket().writeInt(buffer.byteLength).writeBytes(buffer);
    }

    public toString(encoding?: string): string {
        return new TextDecoder(encoding).decode(this.buffer);
    }
}