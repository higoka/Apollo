export class ArrayBufferUtils {
    public static toBuffer(ab: ArrayBuffer): Buffer {
        var buf: Buffer = Buffer.alloc(ab.byteLength);
        var view: Uint8Array = new Uint8Array(ab);
        for (var i = 0; i < buf.length; ++i) {
            buf[i] = view[i];
        }
        return buf;
    }
}