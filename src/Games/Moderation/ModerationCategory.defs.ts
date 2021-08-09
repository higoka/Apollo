import { ModerationCategoryEntity } from "src/Core/Database/ModTools/ModerationCategory.entity";
import { ModerationPresetDefs } from "./ModerationPreset.defs";

export class ModerationCategoryDefs {
    public name: string;
    public preset: Array<ModerationPresetDefs>;

    constructor(data: ModerationCategoryEntity) {
        this.name = data.name;
        this.preset = new Array<ModerationPresetDefs>();
    }
}