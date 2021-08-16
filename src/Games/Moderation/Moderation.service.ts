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
            for (var category of categories) {
                this.category.set(category.id, new ModerationCategoryDefs(category));

                this.modToolsService.getPresetByCategory(category.id).then((presets: ModerationPresetEntity[]) => {
                    for (var preset of presets) {
                        this.category.get(category.id).preset.push(new ModerationPresetDefs(preset));
                    }
                });
            }
        });
    }
}