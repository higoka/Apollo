import { ApolloManager } from "src/Apollo.manager";
import { HabboDefs } from "src/HabboHotel/Habbo/Habbo.defs";
import { AuthenticationOKMessageEvent } from "src/Message/Outgoing/Handshake/AuthenticationOKMessageEvent";
import { MessageReceiver } from "../Message.receiver";

export class SSOTicketMessageEvent extends MessageReceiver {
    private apolloManager: ApolloManager;

    constructor(apolloManager: ApolloManager) {
        super();

        this.apolloManager = apolloManager;
    }

    public read(): void {
        var sso: string = this.Packet.readString();

        if (sso == "") {
            return;
        }

        this.apolloManager.GameManager.HabboManager.loadHabbo(sso).then((habbo: HabboDefs) => {
            if (habbo != null) {
                habbo.setClient = this.GameClient;
                this.GameClient.setHabbo = habbo;

                if (this.GameClient.getHabbo.getHabboData == null) {
                    return;
                }

                this.apolloManager.GameManager.HabboManager.addOnlineUsers(habbo.getHabboData.getId, habbo);

                this.GameClient.send(new AuthenticationOKMessageEvent().compose());
            }
        })
    }
}