import { Injectable, Logger } from '@nestjs/common';
import { UserEntity } from 'src/Core/Database/User/User.entity';
import { UserService } from "src/Core/Database/User/User.service";
import { GameclientService } from '../GameClient/Gameclient.service';
import { HabboDefs } from './Habbo.defs';

@Injectable()
export class HabboService {
    private readonly logger = new Logger(HabboService.name);
    public online: Map<number, HabboDefs>;

    constructor(
        private readonly gameclientService: GameclientService,
        private readonly userService: UserService
    ) {
        this.online = new Map<number, HabboDefs>();
    }

    async loadHabbo(sso: string): Promise<HabboDefs> {
        var habbo: HabboDefs;
        var userId: number;
        return this.userService.findBySSO(sso).then((user: UserEntity) => {
            userId = user.id;

            
            habbo = new HabboDefs(user);
            habbo.habboInfo.loadCurrencies(this.userService);

            // TODO: Check ban when user login

            this.logger.log(habbo.habboInfo.username + " is logged in from " + habbo.habboInfo.ipCurrent);
            return habbo;
        });
    }

    public addHabbo(habbo: HabboDefs): void {
        this.online.set(habbo.habboInfo.id, habbo);
    }

    public removeHabbo(habbo: HabboDefs): void {
        this.online.delete(habbo.habboInfo.id);
    }

    public getHabbo(id: number): HabboDefs {
        return this.online.get(id);
    }

    public cloneCheck(userId: number): HabboDefs {
        return this.gameclientService.getHabbo(userId);
    }
}