import { Injectable, Logger } from '@nestjs/common';
import { UserEntity } from 'src/Core/Database/User/User.entity';
import { UserService } from "src/Core/Database/User/User.service";
import { FriendshipService } from '../Friendship/Friendship.service';
import { GameclientService } from '../GameClient/Gameclient.service';
import { PermissionService } from '../Permission/Permission.service';
import { HabboDefs } from './Habbo.defs';

@Injectable()
export class HabboService {
    private readonly logger = new Logger(HabboService.name);
    public online: Map<number, HabboDefs>;

    constructor(
        private readonly gameclientService: GameclientService,
        private readonly permissionService: PermissionService,
        private readonly userService: UserService,
        private readonly friendsshipService: FriendshipService
    ) {
        this.online = new Map<number, HabboDefs>();
    }

    public async loadHabbo(sso: string): Promise<HabboDefs> {
        var habbo: HabboDefs;
        return this.userService.findBySSO(sso).then(async (user: UserEntity) => {           
            habbo = new HabboDefs(user, this.permissionService, this.userService, this.friendsshipService);
            habbo.habboInfo.loadCurrencies(this.userService);

            // TODO: Check ban when user login

            this.logger.log(habbo.habboInfo.username + " is logged in from " + habbo.habboInfo.ipCurrent);
            return habbo;
        });
    }

    public cloneCheck(userId: number): HabboDefs {
        return this.gameclientService.getHabbo(userId);
    }
}