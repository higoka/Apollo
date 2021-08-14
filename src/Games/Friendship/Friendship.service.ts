import { Injectable } from "@nestjs/common";
import { FriendsService } from "src/Core/Database/Friends/Friends.service";
import { MessengerFriendsEntity } from "src/Core/Database/Friends/MessengerFriends.entity";
import { HabboDefs } from "../User/Habbo.defs";
import { MessengerBuddyDefs } from "./MessengerBuddy.defs";

@Injectable()
export class FriendshipService {
    public friends: Map<number, MessengerBuddyDefs>;

    constructor(
        private readonly friendsService: FriendsService
    ) {
        this.friends = new Map<number, MessengerBuddyDefs>();
    }

    public async loadFriends(habbo: HabboDefs): Promise<void> {
        return this.friendsService.getMessengerById(habbo.habboInfo.id).then((buddies: MessengerFriendsEntity[]) => {
            buddies.forEach((buddy: MessengerFriendsEntity) => {
                if (buddy.habbo.id == habbo.habboInfo.id) {
                    return;
                }

                this.friends.set(buddy.id, new MessengerBuddyDefs(buddy));
            })
        });
    }
}