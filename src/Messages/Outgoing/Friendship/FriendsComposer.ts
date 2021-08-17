import { MessengerBuddyDefs } from "src/Games/Friendship/MessengerBuddy.defs";
import { ArrayUtils } from "src/Utils/ArrayUtils";
import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class FriendsComposer extends MessageComposer {
    private totalPages: number;
    private pageIndex: number;
    private friends: Array<MessengerBuddyDefs>;

    constructor(totalPages: number, pageIndex: number, friends: Array<MessengerBuddyDefs>) {
        super();

        this.totalPages = totalPages;
        this.pageIndex = pageIndex;
        this.friends = friends;
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.MESSENGER_FRIENDS);

        this.response.writeInt(this.totalPages);
        this.response.writeInt(this.pageIndex);
        this.response.writeInt(this.friends.length);

        for (var friend of this.friends) {
            this.response.writeInt(friend.id);
            this.response.writeString(friend.username);
            this.response.writeInt(friend.gender.includes("M") ? 0 : 1);
            this.response.writeBoolean(friend.online == 1);
            this.response.writeBoolean(friend.inRoom);
            this.response.writeString(friend.online == 1 ? friend.look : "");
            this.response.writeInt(0);
            this.response.writeString(friend.motto);
            this.response.writeString("");
            this.response.writeString("");
            this.response.writeBoolean(false);
            this.response.writeBoolean(false);
            this.response.writeBoolean(false);
            this.response.writeShort(friend.relation);
        }

        return this.response;
    }

    public static getMessagesForBuddyList(friendsList: Map<number, MessengerBuddyDefs>): Array<OutPacket> {
        var messages: Array<OutPacket> = new Array<OutPacket>();
        var friends: Array<MessengerBuddyDefs> = new Array<MessengerBuddyDefs>();

        var totalPages: number = (friendsList.size / 750.0);
        var page: number = 0;

        for (var friend of friendsList.values()) {
            friends.push(friend);

            if (friends.length == 750) {
                messages.push(new FriendsComposer(totalPages, page, friends).compose());
                ArrayUtils.clearArray(friends);
                page++;
            }
        }

        if (page == 0 || friends.length > 0) {
            messages.push(new FriendsComposer(totalPages, page, friends).compose());
        }

        return messages;
    }
}