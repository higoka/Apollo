import { UserLoggedInEvent } from "src/Core/Plugin/Events/UserLoggedIn.event";
import { PluginManager } from "src/Core/Plugin/Plugin.manager";
import { HabboDefs } from "src/HabboHotel/Habbo/Habbo.defs";
import { HabboManager } from "src/HabboHotel/Habbo/Habbo.manager";
import { AuthenticationOKMessageEvent } from "src/Message/Outgoing/Handshake/AuthenticationOKMessageEvent";
import { MessageReceiver } from "../Message.receiver";

export class SSOTicketMessageEvent extends MessageReceiver {
    private habboManager: HabboManager;
    private pluginManager: PluginManager;

    constructor(habboManager: HabboManager, pluginManager: PluginManager) {
        super();

        this.habboManager = habboManager;
        this.pluginManager = pluginManager;
    }

    public read(): void {
        var sso: string = this.Packet.readString();

        if (sso == "") {
            return;
        }

        this.habboManager.loadHabbo(sso).then((habbo: HabboDefs) => {
            if (habbo != null) {
                habbo.setClient = this.GameClient;
                this.GameClient.setHabbo = habbo;
                var userLoggedEvent: UserLoggedInEvent = new UserLoggedInEvent();
                userLoggedEvent.habbo = habbo;
                userLoggedEvent.sso = sso;
                this.pluginManager.eventEmitter.emit('user.logged.in', userLoggedEvent);

                if (this.GameClient.getHabbo.getHabboData == null) {
                    return;
                }

                this.habboManager.addOnlineUsers(habbo.getHabboData.getId, habbo);

                this.GameClient.send(new AuthenticationOKMessageEvent().compose());
            }
        })
    }
}