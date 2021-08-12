import { Module } from '@nestjs/common';
import { UserModule } from 'src/Core/Database/User/User.module';
import { FriendshipModule } from '../Friendship/Friendship.module';
import { GameclientModule } from '../GameClient/Gameclient.module';
import { PermissionModule } from '../Permission/Permission.module';
import { HabboService } from './Habbo.service';

@Module({
    imports: [
        GameclientModule,
        UserModule,
        PermissionModule,
        FriendshipModule
    ],
    providers: [
        HabboService
    ],
    exports: [
        HabboService
    ]
})
export class HabboModule {}