import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ModerationCategoryEntity } from './ModerationCategory.entity';
import { ModerationPresetEntity } from './ModerationPreset.entity';
import { ModToolsProvider } from "./ModTools.provider";

@Injectable()
export class ModToolsService {
    constructor(
        private readonly modToolsProvider: ModToolsProvider
    ) {
        
    }

    async getAllCategory(): Promise<ModerationCategoryEntity[]> {
        var repository: Repository<ModerationCategoryEntity> = await this.modToolsProvider.CategoryRepository;
        return repository.find();
    }

    async getPresetByCategory(categoryId: number): Promise<ModerationPresetEntity[]> {
        var repository: Repository<ModerationPresetEntity> = await this.modToolsProvider.PresetRepository;
        return repository.find();
    }
}