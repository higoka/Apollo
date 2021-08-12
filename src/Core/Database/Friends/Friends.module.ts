import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database.module';
import { FriendsProvider } from './Friends.provider';
import { FriendsService } from './Friends.service';

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        FriendsProvider,
        FriendsService
    ],
    exports: [
        FriendsService
    ]
})
export class FriendsModule {}