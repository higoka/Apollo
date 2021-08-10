import { UserService } from "src/Core/Database/User/User.service";
import { UserSettingsEntity } from "src/Core/Database/User/UserSettings.entity";
import { HabboInfoDefs } from "./HabboInfo.defs";

export class HabboStatsDefs {
    public achievementScore: number;
    public respectPointsReceived: number;
    public respectPointsGiven: number;
    public respectPointsToGive: number;
    public petRespectPointsToGive: number;
    public blockFollowing: boolean;
    public blockFriendRequests: boolean;
    public blockRoomInvites: boolean;
    public blockStaffAlerts: boolean;
    public preferOldChat: boolean;
    public blockCameraFollow: boolean;
    public volumeSystem: number;
    public volumeFurni: number;
    public volumeTrax: number;
    public guild: number;
    public guilds: Array<number>;
    public tags: Array<string>;
    public loginStreak: number;
    public rentedItemId: number;
    public rentedTimeEnd: number;
    public hofPoints: number;
    public ignorePets: boolean;
    public ignoreBots: boolean;
    public citizenshipLevel: number;
    public helpersLevel: number;
    public perkTrade: boolean;
    public lastChat: number;
    public lastUsersSearched: number;
    public nux: boolean;
    public nuxReward: boolean;
    public nuxStep: number = 1;
    public mutedCount: number = 0;
    public mutedBubbleTracker: boolean = false;
    public changeNameChecked: string = "";
    public allowNameChange: boolean;
    public uiFlags: number;
    public hasGottenDefaultSavedSearches: boolean;
    private habboInfo: HabboInfoDefs;
    private allowTrade: boolean;
    private clubExpireTimestamp: number;
    private muteEndTime: number;
    public maxFriends: number;
    public maxRooms: number;
    public lastHCPayday: number;
    public hcGiftsClaimed: number;

    constructor(data: UserSettingsEntity, habboInfo: HabboInfoDefs) {
        this.habboInfo = habboInfo;
        this.achievementScore = data.achievement_score;
        this.respectPointsReceived = data.respects_received;
        this.respectPointsGiven = data.respects_given;
        this.petRespectPointsToGive = data.daily_pet_respect_points;
        this.respectPointsToGive = data.daily_respect_points;
        this.blockFollowing = (data.block_following == 1);
        this.blockFriendRequests = (data.block_friendrequests == 1);
        this.blockRoomInvites = (data.block_roominvites == 1);
        this.preferOldChat = (data.old_chat == 1);
        this.blockCameraFollow = (data.block_camera_follow == 1);
        this.guild = data.guild_id;
        this.guilds = new Array<number>();
        this.tags = data.tags.split(";");
        this.allowTrade = (data.can_trade == 1);
        this.clubExpireTimestamp = data.club_expire_timestamp;
        this.loginStreak = data.login_streak;
        this.rentedItemId = data.rent_space_id;
        this.rentedTimeEnd = data.rent_space_endtime;
        this.volumeSystem = data.volume_system;
        this.volumeFurni = data.volume_furni;
        this.volumeTrax = data.volume_trax;
        this.hofPoints = data.hof_points;
        this.blockStaffAlerts = (data.block_alerts == 1);
        this.citizenshipLevel = data.citizen_level;
        this.helpersLevel = data.helper_level;
        this.ignoreBots = (data.ignore_bots == 1);
        this.ignorePets = (data.ignore_pets == 1);
        this.nux = (data.nux == 1);
        this.muteEndTime = data.mute_end_timestamp;
        this.allowNameChange  = (data.allow_name_change == 1);
        this.perkTrade = (data.perk_trade == 1);
        this.uiFlags = data.ui_flags;
        this.hasGottenDefaultSavedSearches = (data.has_gotten_default_saved_searches == 1);
        this.maxFriends = data.max_friends;
        this.maxRooms = data.max_rooms;
        this.lastHCPayday = data.last_hc_payday;
        this.hcGiftsClaimed = data.hc_gifts_claimed;
    }

    public static async createNewStats(habboInfo: HabboInfoDefs, userService: UserService): Promise<HabboStatsDefs> {
        habboInfo.firstVisit = true;

        await userService.insertHabboStats(habboInfo.id);

        return HabboStatsDefs.load(habboInfo, userService);
    }

    public static load(habboInfo: HabboInfoDefs, userService: UserService): HabboStatsDefs {
        var stats: HabboStatsDefs = null;

        userService.HabboStatsCounter(habboInfo.id).then(async (count: number) => {
            if (count == 0) {
                stats = await HabboStatsDefs.createNewStats(habboInfo, userService);
            } else {
                userService.getHabboStats(habboInfo.id).then((setting: UserSettingsEntity) => {
                    stats = new HabboStatsDefs(setting, habboInfo);
                });
            }
        });

        return stats;
    }
}