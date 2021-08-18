import * as ws from "ws";
import * as net from "net";

export class GameClientDefs {
    public habbo: any; // TODO: Change type
    public channel: ws | net.Socket;
    public id: number;

    constructor(id: number, channel: ws | net.Socket) {
        this.id = id;
        this.channel = channel;
    }

    private flashWriter(buffer: ArrayBuffer): void {
        if (this.channel instanceof net.Socket) {
            //this.channel.write(ArrayBufferUtils.toBuffer(buffer));
        }
    }

    private nitroWriter(buffer: ArrayBufferLike): void {
        if (this.channel instanceof ws) {
            if (this.channel.readyState != this.channel.OPEN)
                return;
 
            this.channel.send(buffer);
        }
    }
}