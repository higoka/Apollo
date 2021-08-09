import { Module } from '@nestjs/common';
import { MoodToolsModule } from 'src/Core/Database/ModTools/ModTools.module';
import { ModerationService } from './Moderation.service';

@Module({
    imports: [
        MoodToolsModule
    ],
    providers: [
        ModerationService
    ],
    exports: [
        ModerationService
    ]
})
export class ModerationModule {}