import { Injectable } from "@nestjs/common";
import { FriendsService } from "src/Core/Database/Friends/Friends.service";
import { MessengerFriendsEntity } from "src/Core/Database/Friends/MessengerFriends.entity";
import { MessengerBuddyDefs } from "./MessengerBuddy.defs";

@Injectable()
export class FriendshipService {
    public friends: Map<number, MessengerBuddyDefs>;

    constructor(
        private readonly friendsService: FriendsService
    ) {
        this.friends = new Map<number, MessengerBuddyDefs>();
    }

    public async loadFriends(userId: number): Promise<void> {
        return this.friendsService.getMessengerById(userId).then((buddies: MessengerFriendsEntity[]) => {
            buddies.forEach((buddy: MessengerFriendsEntity) => {
                var friend: MessengerBuddyDefs = new MessengerBuddyDefs(buddy)

                if (friend.userOne != userId) {
                    return;
                }

                this.friends.set(buddy.id, friend);
            })
        });
    }
}