import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EmulatorProvider } from './Emulator.provider';
import { EmulatorSettingsEntity } from './EmulatorSettings.entity';
import { EmulatorTextsEntity } from './EmulatorTexts.entity';

@Injectable()
export class EmulatorService {
    constructor(
        private readonly emulatorProvider: EmulatorProvider
    ) {
        
    }

    async getSettingsByKey(chiave: string): Promise<EmulatorSettingsEntity> {
        var repository: Repository<EmulatorSettingsEntity> = await this.emulatorProvider.EmulatorSettingsRepository;
        return repository.findOne({
            where: { 
                key: chiave
            }
        });
    }

    async getTextsByKey(chiave: string): Promise<EmulatorTextsEntity> {
        var repository: Repository<EmulatorTextsEntity> = await this.emulatorProvider.EmulatorTextsRepository;
        return repository.findOne({
            where: { 
                key: chiave
            }
        });
    }
}