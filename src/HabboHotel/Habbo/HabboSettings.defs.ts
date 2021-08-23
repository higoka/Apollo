import { UserManager } from "src/Core/Database/User/User.manager";
import { UserEntity } from "src/Core/Database/User/User.entity";
import { UserSettingsEntity } from "src/Core/Database/User/UserSettngs.entity";

export class HabboSettingsDefs {
    private userManager: UserManager;
    private homeRoom: number;
    private givenRespect: number;
    private receivedRespect: number;
    private canChangeName: boolean;
    private canTrade: boolean;
    private citizenStatus: boolean;
    private citizenLevel: number;
    private helperLevel: number;
    private blockFollowing: boolean;
    private blockFriendRequests: boolean;
    private blockAlerts: boolean;
    private systemVolume: number;
    private furniVolume: number;
    private traxVolume: number;
    private chatType: boolean;
    private botsIgnore: boolean;
    private petsIgnore: boolean;
    private roomsMaxNumber: number;
    private friendsMaxNumber: number;

    constructor(data: UserSettingsEntity, userManager: UserManager) {
        this.userManager = userManager;
        this.homeRoom = data.home_room;
        this.givenRespect = data.given_respect;
        this.receivedRespect = data.received_respect;
        this.canChangeName = (data.can_change_name == 1);
        this.canTrade = (data.can_trade == 1);
        this.citizenStatus = (data.citizen_status == 1);
        this.citizenLevel = data.citizen_level;
        this.helperLevel = data.helper_level;
        this.blockFollowing = (data.block_following == 1);
        this.blockFriendRequests = (data.block_friend_requests == 1);
        this.blockAlerts = (data.block_alerts == 1);
        this.systemVolume = data.system_volume;
        this.furniVolume = data.furni_volume;
        this.traxVolume = data.trax_volume;
        this.chatType = (data.chat_type == 1);
        this.botsIgnore = (data.bots_ignore == 1);
        this.petsIgnore = (data.pets_ignore == 1);
        this.roomsMaxNumber = data.rooms_max_number;
        this.friendsMaxNumber = data.friends_max_number;
    }

    public get getHomeRoom(): number {
        return this.homeRoom;
    }

    public get getGivenRespect(): number {
        return this.givenRespect;
    }

    public get getReceivedRespect(): number {
        return this.receivedRespect;
    }

    public get getCanChangeName(): boolean {
        return this.canChangeName;
    }

    public get getCanTrade(): boolean {
        return this.canTrade;
    }

    public get getCitizenStatus(): boolean {
        return this.citizenStatus;
    }

    public get getCitizenLevel(): number {
        return this.citizenLevel;
    }

    public get getBlockFollowing(): boolean {
        return this.blockFollowing;
    }

    public get getAlerts(): boolean {
        return this.blockAlerts;
    }

    public get getBlockFriendRequest(): boolean {
        return this.blockFriendRequests;
    }

    public get getSystemVolume(): number {
        return this.systemVolume;
    }

    public get getFurniVolume(): number {
        return this.furniVolume;
    }

    public get getTraxVolume(): number {
        return this.traxVolume;
    }

    public get getChatType(): boolean {
        return this.chatType;
    }

    public get getBotsIgnore(): boolean {
        return this.botsIgnore;
    }

    public get getPetsIgnore(): boolean {
        return this.petsIgnore;
    }

    public get getMaxRooms(): number {
        return this.roomsMaxNumber;
    }

    public get getMaxFriends(): number {
        return this.friendsMaxNumber;
    }

    private static async createNewStats(data: UserEntity, userManager: UserManager): Promise<HabboSettingsDefs> {
        await userManager.insertNewSetting(data.id);

        return HabboSettingsDefs.load(data, userManager);
    }

    public static load(data: UserEntity, userManager: UserManager): HabboSettingsDefs {
        var stats: HabboSettingsDefs;

        userManager.getSettingsCount(data.id).then(async (settingsCount: number) => {
            if (settingsCount > 0) {
                stats = new HabboSettingsDefs(data.user_settings, userManager);
            } else {
                stats = await HabboSettingsDefs.createNewStats(data, userManager);
            }    
        });

        return stats;
    }
}