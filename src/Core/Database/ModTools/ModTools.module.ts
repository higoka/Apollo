import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database.module';
import { ModToolsProvider } from './ModTools.provider';
import { ModToolsService } from './ModTools.service';

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        ModToolsProvider,
        ModToolsService
    ],
    exports: [
        ModToolsService
    ]
})
export class MoodToolsModule {}