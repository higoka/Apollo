import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { UserEntity } from 'src/Core/Database/User/User.entity';
import { UserManager } from 'src/Core/Database/User/User.manager';
import { HabboDefs } from './Habbo.defs';

@Injectable()
export class HabboManager {
    private readonly logger: Logger = new Logger(HabboManager.name);
    private usersOnline: Map<number, HabboDefs>;

    constructor(
        private readonly userManager: UserManager
    ) {
        this.usersOnline = new Map<number, HabboDefs>();
    }

    // TODO: Finish
    public async loadHabbo(sso: string): Promise<HabboDefs> {
        var habbo: HabboDefs;

        return this.userManager.findBySSO(sso).then((user: UserEntity) => {
            habbo = new HabboDefs(user, this.userManager);

            this.logger.log(habbo.getHabboData.getUsername + " is logged in from " + habbo.getHabboData.getCurrentIp);
            return habbo;
        })
    }

    public addOnlineUsers(userId: number, habbo: HabboDefs): void {
        this.usersOnline.set(userId, habbo);
    }
}