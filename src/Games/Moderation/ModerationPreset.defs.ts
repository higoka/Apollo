import { ModerationPresetEntity } from "src/Core/Database/ModTools/ModerationPreset.entity";

export class ModerationPresetDefs {
    public id: number;
    public name: string;
    public message: string;
    public reminder: string;
    public banLength: number;
    public muteLength: number;

    constructor(data: ModerationPresetEntity) {
        this.id = data.id;
        this.name = data.name;
        this.message = data.message;
        this.reminder = data.reminder;
        this.banLength = data.ban_for;
        this.muteLength = data.mute_for;
    }
}