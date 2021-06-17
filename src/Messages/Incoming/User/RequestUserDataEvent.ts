import { UserDataComposer } from 'src/Messages/Outgoing/User/UserDataComposer';
import { UserPerksComposer } from 'src/Messages/Outgoing/User/UserPerksComposer';
import { MessageHandler } from "../message.handler";

export class RequestUserDataEvent extends MessageHandler {
    public handle(): void {
        if (this.gameClient.habbo != null) {
            this.gameClient.send(new UserDataComposer(this.gameClient.habbo).compose());
            this.gameClient.send(new UserPerksComposer(this.gameClient.habbo).compose());
        }
    }
}