import { Injectable } from '@nestjs/common';
import { OutgoingList } from 'src/Messages/Outgoing/Outgoing.list';
import { UserDataComposer } from 'src/Messages/Outgoing/User/UserDataComposer';
import { MessageHandler } from "../message.handler";

@Injectable()
export class RequestUserDataEvent extends MessageHandler {
    public handle(): void {
        if (this.gameClient.habbo != null) {
            this.gameClient.send(OutgoingList.USER_INFO, new UserDataComposer(this.gameClient.habbo).compose());
        }
    }
}