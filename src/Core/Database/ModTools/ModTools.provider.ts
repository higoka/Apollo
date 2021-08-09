import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from '../Database.provider';
import { Connection, Repository } from 'typeorm';
import { ModerationCategoryEntity } from './ModerationCategory.entity';
import { ModerationPresetEntity } from './ModerationPreset.entity';

@Injectable()
export class ModToolsProvider {
    constructor(
        private readonly databaseProvider: DatabaseProvider
    ) {
        
    }

    get CategoryRepository(): Promise<Repository<ModerationCategoryEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(ModerationCategoryEntity);
        });
    }

    get PresetRepository(): Promise<Repository<ModerationPresetEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(ModerationPresetEntity);
        });
    }
}