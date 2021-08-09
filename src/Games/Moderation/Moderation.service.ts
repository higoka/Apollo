import { Injectable, Logger } from '@nestjs/common';
import { ModerationCategoryEntity } from 'src/Core/Database/ModTools/ModerationCategory.entity';
import { ModerationPresetEntity } from 'src/Core/Database/ModTools/ModerationPreset.entity';
import { ModToolsService } from 'src/Core/Database/ModTools/ModTools.service';
import { ModerationCategoryDefs } from './ModerationCategory.defs';
import { ModerationPresetDefs } from './ModerationPreset.defs';

@Injectable()
export class ModerationService {
    private readonly logger = new Logger(ModerationService.name);
    public category: Map<number, ModerationCategoryDefs>;

    constructor(
        private readonly modToolsService: ModToolsService
    ) {
        this.category = new Map<number, ModerationCategoryDefs>();
        this.loadModTool();
    }

    public loadModTool(): void {
        this.category.clear();

        this.modToolsService.getAllCategory().then((categories: ModerationCategoryEntity[]) => {
            categories.forEach((category: ModerationCategoryEntity) => {
                this.category.set(category.id, new ModerationCategoryDefs(category));

                this.modToolsService.getPresetByCategory(category.id).then((presets: ModerationPresetEntity[]) => {
                    presets.forEach((preset: ModerationPresetEntity) => {
                        this.category.get(category.id).preset.push(new ModerationPresetDefs(preset));
                    });
                });
            });
        });
    }
}