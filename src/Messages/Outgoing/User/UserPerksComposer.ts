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
        this.response.writeBoolean(this.habbo.habboInfo.rank.hasPermission("acc_helper_use_guide_tool", false));
        this.response.writeString("GIVE_GUIDE_TOURS");
        this.response.writeString("");
        this.response.writeBoolean(this.habbo.habboInfo.rank.hasPermission("acc_helper_give_guide_tours", false));
        this.response.writeString("JUDGE_CHAT_REVIEWS");
        this.response.writeString("requirement.unfulfilled.helper_level_6");
        this.response.writeBoolean(this.habbo.habboInfo.rank.hasPermission("acc_helper_judge_chat_reviews", false));
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
        this.response.writeBoolean(this.habbo.habboInfo.rank.hasPermission("acc_floorplan_editor", false));
        this.response.writeString("BUILDER_AT_WORK");
        this.response.writeString("");
        this.response.writeBoolean(true);
        this.response.writeString("CALL_ON_HELPERS");
        this.response.writeString("");
        this.response.writeBoolean(true);
        this.response.writeString("CAMERA");
        this.response.writeString("");
        this.response.writeBoolean(this.habbo.habboInfo.rank.hasPermission("acc_camera", false));
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
    }
}