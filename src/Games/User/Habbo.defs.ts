import { UserEntity } from "src/Core/Database/User/User.entity";
import { UserService } from "src/Core/Database/User/User.service";
import { UpdateResult } from "typeorm";
import { FriendshipService } from "../Friendship/Friendship.service";
import { GameclientDefs } from "../GameClient/Gameclient.defs";
import { PermissionService } from "../Permission/Permission.service";
import { PathfinderDefs } from "../Rooms/Pathfinder/Pathfinder.defs";
import { PathfinderTypeEnum } from "../Rooms/Pathfinder/PathfinderType.enum";
import { HabboInfoDefs } from "./HabboInfo.defs";
import { HabboStatsDefs } from "./HabboStats.defs";

export class HabboDefs {
    public client: GameclientDefs;
    public habboInfo: HabboInfoDefs;
    public habboStats: HabboStatsDefs;
    public pathfinder: PathfinderDefs;
    public messenger: FriendshipService;
    private userService: UserService;

    constructor(data: UserEntity, permissionService: PermissionService, userService: UserService, friendsshipService: FriendshipService) {
        this.client = null;
        this.userService = userService;
        this.habboInfo = new HabboInfoDefs(data, permissionService);
        this.habboStats = HabboStatsDefs.load(this.habboInfo, userService);
        this.pathfinder = new PathfinderDefs();
        this.pathfinder.type = PathfinderTypeEnum.USER;
        this.messenger = friendsshipService;
        this.messenger.loadFriends(this);

        // TODO: Add messenger and inventory
    }

    public async setOnline(userId: number): Promise<UpdateResult> {
        return await this.userService.changeState(userId, '1');
    }

    public async setOffline(userId: number): Promise<UpdateResult> {
        return await this.userService.changeState(userId, '0');
    }
}