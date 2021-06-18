import { UserCreditsComposer } from "src/Messages/Outgoing/User/UserCreditsComposer";
import { MessageHandler } from "../message.handler";

export class RequestUserCurrencyEvent extends MessageHandler {
    public handle(): void {
        if (this.gameClient.habbo != null) {
            this.gameClient.send(new UserCreditsComposer(this.gameClient.habbo).compose());
        }
    }
}