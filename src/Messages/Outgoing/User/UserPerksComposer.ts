import { HabboDefs } from "src/Games/User/Habbo.defs";
import { MessageComposer } from "../Message.composer";

export class UserPerksComposer extends MessageComposer {
    private habbo: HabboDefs;

    constructor(habbo: HabboDefs) {
        super();

        this.habbo = habbo;
    }

    protected composeInternal(): void {
        this.data = [ 15, "USE_GUIDE_TOOL", "requirement.unfulfilled.helper_level_4", false, "GIVE_GUIDE_TOURS", "", false, "JUDGE_CHAT_REVIEWS", "requirement.unfulfilled.helper_level_6", false, "VOTE_IN_COMPETITIONS", "requirement.unfulfilled.helper_level_2", true, "CALL_ON_HELPERS", "", true, "CITIZEN", "", true, "TRADE", "requirement.unfulfilled.no_trade_lock", false, "HEIGHTMAP_EDITOR_BETA", "requirement.unfulfilled.feature_disabled", true, "BUILDER_AT_WORK", "", true, "CALL_ON_HELPERS", "", true, "CAMERA", "", true, "NAVIGATOR_PHASE_TWO_2014", "", true, "MOUSE_ZOOM", "", true, "NAVIGATOR_ROOM_THUMBNAIL_CAMERA", "", true, "HABBO_CLUB_OFFER_BETA", "", true ];
    }
}