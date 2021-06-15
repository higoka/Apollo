import { MessageComposer } from "../Message.composer";

export class LoginOKComposer extends MessageComposer {
    protected composeInternal(): void {
        this.data = [  ];
    }
}