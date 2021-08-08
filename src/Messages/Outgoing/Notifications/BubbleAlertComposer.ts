import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class BubbleAlertComposer extends MessageComposer {
    private errorKey: string;
    private keys: Map<string, string>;

    constructor(errorKey: string, keys: Map<string, string>) {
        super();

        this.errorKey = errorKey;
        this.keys = keys;
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.NOTIFICATION_LIST);

        this.response.writeString(this.errorKey);
        console.log(this.keys);
        this.response.writeInt(this.keys.size);
        this.keys.forEach((key: string) => {
            this.response.writeString(this.keys.keys().next().value);
            this.response.writeString(key);
        })
 
        return this.response;
    }
}