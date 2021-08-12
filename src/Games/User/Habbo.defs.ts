import { UserEntity } from "src/Core/Database/User/User.entity";
import { UserService } from "src/Core/Database/User/User.service";
import { FriendshipModule } from "../Friendship/Friendship.module";
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

    constructor(data: UserEntity, permissionService: PermissionService, userService: UserService, friendsshipService: FriendshipService) {
        this.client = null;
        this.habboInfo = new HabboInfoDefs(data, permissionService);
        this.habboStats = HabboStatsDefs.load(this.habboInfo, userService);
        this.pathfinder = new PathfinderDefs();
        this.pathfinder.type = PathfinderTypeEnum.USER;
        friendsshipService.loadFriends(this.habboInfo.id);

        // TODO: Add messenger and inventory
    }
}