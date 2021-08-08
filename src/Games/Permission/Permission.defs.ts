import { PermissionSettingEnum } from "./PermissionSetting.enum";

export class PermissionDefs {
    public key: string;
    public setting: PermissionSettingEnum;

    constructor(key: string, setting: number) {
        this.key = key;

        switch (setting) {
            case 0:
                this.setting = PermissionSettingEnum.DISALLOWED;
            case 1:
                this.setting = PermissionSettingEnum.ALLOWED;
            break;
            case 2:
                this.setting = PermissionSettingEnum.ROOM_OWNER;
            break;
        }
    }
}