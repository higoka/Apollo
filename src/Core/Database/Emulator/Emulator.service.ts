import { Injectable, Inject } from '@nestjs/common';
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
        return this.emulatorProvider.EmulatorSettingsRepository.findOne({
            select: ['value'],
            where: { 
                key: chiave
            }
        });
    }

    async getTextsByKey(chiave: string): Promise<EmulatorTextsEntity> {
        return this.emulatorProvider.EmulatorTextsRepository.findOne({
            select: ['value'],
            where: { 
                key: chiave
            }
        });
    }
}