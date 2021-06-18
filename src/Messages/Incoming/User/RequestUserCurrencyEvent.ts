import { UserCreditsComposer } from "src/Messages/Outgoing/User/UserCreditsComposer";
import { UserCurrencyComposer } from "src/Messages/Outgoing/User/UserCurrencyComposer";
import { MessageHandler } from "../message.handler";

export class RequestUserCurrencyEvent extends MessageHandler {
    public handle(): void {
        if (this.gameClient.habbo != null) {
            this.gameClient.send(new UserCreditsComposer(this.gameClient.habbo).compose());
            this.gameClient.send(new UserCurrencyComposer(this.gameClient.habbo).compose());
        }
    }
}