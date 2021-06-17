import { HabboDefs } from "src/Games/User/Habbo.defs";
import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class UserCurrencyComposer extends MessageComposer {
    private habbo: HabboDefs;

    constructor(habbo: HabboDefs) {
        super();

        this.habbo = habbo;
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.USER_CURRENCY);
        return this.response;
    }
}