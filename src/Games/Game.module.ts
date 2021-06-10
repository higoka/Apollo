import { Module } from '@nestjs/common';
import { HabboModule } from './User/Habbo.module';

@Module({
    imports: [
        HabboModule
    ]
})
export class GameModule {}