import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class NewNavigatorCollapsedCategoriesComposer extends MessageComposer {
    constructor() {
        super();
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.NAVIGATOR_COLLAPSED);

        this.response.writeInt(46);
        this.response.writeString("new_ads");
        this.response.writeString("friend_finding");
        this.response.writeString("staffpicks");
        this.response.writeString("with_friends");
        this.response.writeString("with_rights");
        this.response.writeString("query");
        this.response.writeString("recommended");
        this.response.writeString("my_groups");
        this.response.writeString("favorites");
        this.response.writeString("history");
        this.response.writeString("top_promotions");
        this.response.writeString("campaign_target");
        this.response.writeString("friends_rooms");
        this.response.writeString("groups");
        this.response.writeString("metadata");
        this.response.writeString("history_freq");
        this.response.writeString("highest_score");
        this.response.writeString("competition");
        this.response.writeString("category__Agencies");
        this.response.writeString("category__Role Playing");
        this.response.writeString("category__Global Chat & Discussi");
        this.response.writeString("category__GLOBAL BUILDING AND DE");
        this.response.writeString("category__global party");
        this.response.writeString("category__global games");
        this.response.writeString("category__global fansite");
        this.response.writeString("category__global help");
        this.response.writeString("category__Trading");
        this.response.writeString("category__global personal space");
        this.response.writeString("category__Habbo Life");
        this.response.writeString("category__TRADING");
        this.response.writeString("category__global official");
        this.response.writeString("category__global trade");
        this.response.writeString("category__global reviews");
        this.response.writeString("category__global bc");
        this.response.writeString("category__global personal space");
        this.response.writeString("eventcategory__Hottest Events");
        this.response.writeString("eventcategory__Parties & Music");
        this.response.writeString("eventcategory__Role Play");
        this.response.writeString("eventcategory__Help Desk");
        this.response.writeString("eventcategory__Trading");
        this.response.writeString("eventcategory__Games");
        this.response.writeString("eventcategory__Debates & Discuss");
        this.response.writeString("eventcategory__Grand Openings");
        this.response.writeString("eventcategory__Friending");
        this.response.writeString("eventcategory__Jobs");
        this.response.writeString("eventcategory__Group Events");

        return this.response;
    }
}