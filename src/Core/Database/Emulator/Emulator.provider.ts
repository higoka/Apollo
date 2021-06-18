import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from '../Database.provider';
import { Repository } from 'typeorm';
import { EmulatorSettingsEntity } from './EmulatorSettings.entity';
import { EmulatorTextsEntity } from './EmulatorTexts.entity';

@Injectable()
export class EmulatorProvider {
    constructor(
        private readonly databaseProvider: DatabaseProvider
    ) {
        
    }

    get EmulatorSettingsRepository(): Repository<EmulatorSettingsEntity> {
        return this.databaseProvider.getConnection().getRepository(EmulatorSettingsEntity);
    }

    get EmulatorTextsRepository(): Repository<EmulatorTextsEntity> {
        return this.databaseProvider.getConnection().getRepository(EmulatorTextsEntity);
    }
}