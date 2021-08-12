import { Module } from '@nestjs/common';
import { FriendsModule } from 'src/Core/Database/Friends/Friends.module';
import { FriendshipService } from './Friendship.service';

@Module({
    imports: [
        FriendsModule
    ],
    providers: [
        FriendshipService
    ],
    exports: [
        FriendshipService
    ]
})
export class FriendshipModule {}