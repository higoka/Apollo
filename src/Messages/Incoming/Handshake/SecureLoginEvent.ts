import { HabboDefs } from 'src/Games/User/Habbo.defs';
import { HabboService } from 'src/Games/User/Habbo.service';
import { AvailabilityStatusMessageComposer } from 'src/Messages/Outgoing/Handshake/AvailabilityStatusMessageComposer';
import { LoginOKComposer } from 'src/Messages/Outgoing/Handshake/LoginOKComposer';
import { PingComposer } from 'src/Messages/Outgoing/Handshake/PingComposer';
import { UserPermissionComposer } from 'src/Messages/Outgoing/User/UserPermissionComposer';
import { MessageHandler } from "../message.handler";

export class SecureLoginEvent extends MessageHandler {
    constructor(
        private readonly habboService: HabboService
    ) {
        super();
    }

    public handle(): void {
        var sso: string = this.entryPacket.readString();

        if (sso == "") {
            return;
        }

        if (this.gameClient.habbo == null) {
            this.habboService.loadHabbo(sso).then((habbo: HabboDefs) => {
                if (habbo != null) {
                    habbo.client = this.gameClient;
                    this.gameClient.habbo = habbo;

                    if (this.gameClient.habbo.habboInfo == null) {
                        return;
                    }

                    this.habboService.addHabbo(habbo);
                    this.gameClient.send(new LoginOKComposer().compose());
                    this.gameClient.send(new UserPermissionComposer(this.gameClient.habbo).compose());
                    this.gameClient.send(new AvailabilityStatusMessageComposer(true, false, true).compose());
                    this.gameClient.send(new PingComposer().compose());
                }
            });
        }
    }
}