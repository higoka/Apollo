import { GameclientDefs } from "src/Games/GameClient/Gameclient.defs";
import { HabboDefs } from "src/Games/User/Habbo.defs";
import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class UserProfileComposer extends MessageComposer {
    private habbo: HabboDefs;
    private viewer: GameclientDefs;

    constructor(habbo: HabboDefs, viewer: GameclientDefs) {
        super();

        this.habbo = habbo;
        this.viewer = viewer;
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.USER_PROFILE);

        

        return this.response;
    }
}