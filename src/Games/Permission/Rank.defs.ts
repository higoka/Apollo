import { getConnection } from 'typeorm';
import { UserPermissionEntity } from "src/Core/Database/User/UserPermission.entity";
import { PermissionDefs } from './Permission.defs';
import { PermissionSettingEnum } from './PermissionSetting.enum';

export class RankDefs {
    public id: number;
    public level: number;
    public permissions: Map<string, PermissionDefs>;
    public variables: Map<string, string>;
    public name: string;
    public badge: string;
    public roomEffect: number;
    public logCommands: boolean;
    public prefix: string;
    public prefixColor: string;
    public hasPrefix: boolean;
    public diamondsTimerAmount: number;
    public creditsTimerAmount: number;
    public pixelsTimerAmount: number;
    public gotwTimerAmount: number;

    constructor(data: UserPermissionEntity) {
        this.permissions = new Map<string, any>();
        this.variables = new Map<string, string>();
        this.id = data.id;
        this.level = data.level;
        this.diamondsTimerAmount = data.auto_points_amount;
        this.pixelsTimerAmount = data.auto_pixels_amount;
        this.creditsTimerAmount = data.auto_credits_amount;
        this.gotwTimerAmount = data.auto_gotw_amount;
        this.name = data.rank_name;
        this.badge = data.badge;
        this.roomEffect = data.room_effect;
        this.logCommands = (data.log_commands == 1);
        this.prefix = data.prefix;
        this.prefixColor = data.prefix_color;
        this.hasPrefix = (this.prefix == "");

        var meta = getConnection("Apollo").getMetadata(UserPermissionEntity);

        for (var property in meta.propertiesMap) {
            if (property.startsWith("cmd_") || property.startsWith("acc_")) {
                this.permissions.set(property, new PermissionDefs(property, data[property]));
            } else {
                this.variables.set(property, data[property]);
            }
        }
    }

    public hasPermission(key: string, isRoomOwner: boolean): boolean {
        if (this.permissions.has(key)) {
            var permission: PermissionDefs = this.permissions.get(key);

            return permission.setting == PermissionSettingEnum.ALLOWED || permission.setting == PermissionSettingEnum.ROOM_OWNER && isRoomOwner;
        }
        return false;
    }
}