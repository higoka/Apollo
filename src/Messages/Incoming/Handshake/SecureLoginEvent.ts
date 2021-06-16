import { Injectable } from '@nestjs/common'
import { HabboDefs } from 'src/Games/User/Habbo.defs';
import { HabboService } from 'src/Games/User/Habbo.service';
import { LoginOKComposer } from 'src/Messages/Outgoing/Handshake/LoginOKComposer';
import { OutgoingList } from 'src/Messages/Outgoing/Outgoing.list';
import { MessageHandler } from "../message.handler";

@Injectable()
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
                    this.gameClient.send(OutgoingList.AUTHENTICATED, new LoginOKComposer().compose());
                }
            });
        }
    }
}