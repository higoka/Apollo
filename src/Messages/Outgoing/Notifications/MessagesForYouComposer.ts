import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class MessagesForYouComposer extends MessageComposer {
    private messages: Array<string>;

    constructor(messages: Array<string>) {
        super();

        this.messages = messages;
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.MOTD_MESSAGES);

        this.response.writeInt(this.messages.length);

        for (var message of this.messages) {
            this.response.writeString(message);
        }

        return this.response;
    }
}