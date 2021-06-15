import { Injectable } from '@nestjs/common'
import { HabboDefs } from 'src/Games/User/Habbo.defs';
import { HabboService } from 'src/Games/User/Habbo.service';
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

        this.habboService.loadHabbo(sso).then((habbo: HabboDefs) => {
            
        });
    }
}