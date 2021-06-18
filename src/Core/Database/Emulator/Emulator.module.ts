import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database.module';
import { EmulatorProvider } from './Emulator.provider';
import { EmulatorService } from './Emulator.service';

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        EmulatorProvider,
        EmulatorService
    ],
    exports: [
        EmulatorService
    ]
})
export class EmulatorModule {}