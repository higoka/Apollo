import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from '../Database.provider';
import { Connection, Repository } from 'typeorm';
import { EmulatorSettingsEntity } from './EmulatorSettings.entity';
import { EmulatorTextsEntity } from './EmulatorTexts.entity';

@Injectable()
export class EmulatorProvider {
    constructor(
        private readonly databaseProvider: DatabaseProvider
    ) {
        
    }

    get EmulatorSettingsRepository(): Promise<Repository<EmulatorSettingsEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(EmulatorSettingsEntity);
        });
    }

    get EmulatorTextsRepository(): Promise<Repository<EmulatorTextsEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(EmulatorTextsEntity);
        });
    }
}