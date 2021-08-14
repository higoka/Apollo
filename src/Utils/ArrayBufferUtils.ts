export class ArrayBufferUtils {
    public static toBuffer(ab: ArrayBuffer): Buffer {
        var buf: Buffer = Buffer.alloc(ab.byteLength);
        var view: Uint8Array = new Uint8Array(ab);
        for (var i = 0; i < buf.length; ++i) {
            buf[i] = view[i];
        }
        return buf;
    }

    public static ToArrayBufferSlice(buffer: Buffer): ArrayBuffer {
        return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
    }

    public static toArrayBuffer(buffer: Buffer): ArrayBuffer {
        var ab = new ArrayBuffer(buffer.length);
        var view = new Uint8Array(ab);
        for (var i = 0; i < buffer.length; ++i) {
            view[i] = buffer[i];
        }
        return ab;
    }
}