import { FriendsComposer } from 'src/Messages/Outgoing/Friendship/FriendsComposer';
import { MessengerInitComposer } from 'src/Messages/Outgoing/Friendship/MessengerInitComposer';
import { MessageHandler } from '../message.handler';

export class RequestInitFriendsEvent extends MessageHandler {
    public handle(): void {
        this.gameClient.send(new MessengerInitComposer(this.gameClient.habbo).compose());
        //this.gameClient.send(FriendsComposer.getMessagesForBuddyList(this.gameClient.habbo.friends.friends));
    }
}