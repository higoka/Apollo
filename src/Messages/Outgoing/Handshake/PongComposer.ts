import { MessageComposer } from "../Message.composer";

export class PongComposer extends MessageComposer {
    private id: number;

    constructor(id: number) {
        super();
    
        this.id = id;
    }

    protected composeInternal(): void {
        this.data = [ this.id ];
    }
}