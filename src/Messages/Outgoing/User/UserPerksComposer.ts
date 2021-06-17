import { HabboDefs } from "src/Games/User/Habbo.defs";
import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class UserPerksComposer extends MessageComposer {
    private habbo: HabboDefs;

    constructor(habbo: HabboDefs) {
        super();

        this.habbo = habbo;
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.USER_PERKS);
        this.response.writeInt(15);
        this.response.writeString("USE_GUIDE_TOOL");
        this.response.writeString("requirement.unfulfilled.helper_level_4");
        this.response.writeBoolean(false);
        this.response.writeString("GIVE_GUIDE_TOURS");
        this.response.writeString("");
        this.response.writeBoolean(false);
        this.response.writeString("JUDGE_CHAT_REVIEWS");
        this.response.writeString("requirement.unfulfilled.helper_level_6");
        this.response.writeBoolean(false);
        this.response.writeString("VOTE_IN_COMPETITIONS");
        this.response.writeString("requirement.unfulfilled.helper_level_2");
        this.response.writeBoolean(true);
        this.response.writeString("CALL_ON_HELPERS");
        this.response.writeString("");
        this.response.writeBoolean(true);
        this.response.writeString("CITIZEN");
        this.response.writeString("");
        this.response.writeBoolean(true);
        this.response.writeString("TRADE");
        this.response.writeString("requirement.unfulfilled.no_trade_lock");
        this.response.writeBoolean(true);
        this.response.writeString("HEIGHTMAP_EDITOR_BETA");
        this.response.writeString("requirement.unfulfilled.feature_disabled");
        this.response.writeBoolean(true);
        this.response.writeString("BUILDER_AT_WORK");
        this.response.writeString("");
        this.response.writeBoolean(true);
        this.response.writeString("CALL_ON_HELPERS");
        this.response.writeString("");
        this.response.writeBoolean(true);
        this.response.writeString("CAMERA");
        this.response.writeString("");
        this.response.writeBoolean(true);
        this.response.writeString("NAVIGATOR_PHASE_TWO_2014");
        this.response.writeString("");
        this.response.writeBoolean(true);
        this.response.writeString("MOUSE_ZOOM");
        this.response.writeString("");
        this.response.writeBoolean(true);
        this.response.writeString("NAVIGATOR_ROOM_THUMBNAIL_CAMERA");
        this.response.writeString("");
        this.response.writeBoolean(true);
        this.response.writeString("HABBO_CLUB_OFFER_BETA");
        this.response.writeString("");
        this.response.writeBoolean(true);
        return this.response;
        //this.data = [ 15, "USE_GUIDE_TOOL", "requirement.unfulfilled.helper_level_4", false, "GIVE_GUIDE_TOURS", "", false, "JUDGE_CHAT_REVIEWS", "requirement.unfulfilled.helper_level_6", false, "VOTE_IN_COMPETITIONS", "requirement.unfulfilled.helper_level_2", true, "CALL_ON_HELPERS", "", true, "CITIZEN", "", true, "TRADE", "requirement.unfulfilled.no_trade_lock", false, "HEIGHTMAP_EDITOR_BETA", "requirement.unfulfilled.feature_disabled", true, "BUILDER_AT_WORK", "", true, "CALL_ON_HELPERS", "", true, "CAMERA", "", true, "NAVIGATOR_PHASE_TWO_2014", "", true, "MOUSE_ZOOM", "", true, "NAVIGATOR_ROOM_THUMBNAIL_CAMERA", "", true, "HABBO_CLUB_OFFER_BETA", "", true ];
    }
}