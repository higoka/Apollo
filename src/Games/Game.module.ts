import { Module } from '@nestjs/common';
import { CatalogueModule } from './Catalogue/Catalogue.module';
import { FriendshipModule } from './Friendship/Friendship.module';
import { FurnitureModule } from './Furniture/Furniture.module';
import { GameService } from './Game.service';
import { GameclientModule } from './GameClient/Gameclient.module';
import { ModerationModule } from './Moderation/Moderation.module';
import { NavigationModule } from './Navigation/Navigation.module';
import { PermissionModule } from './Permission/Permission.module';
import { RoomModule } from './Rooms/Room.module';
import { HabboModule } from './User/Habbo.module';

@Module({
    imports: [
        GameclientModule,
        HabboModule,
        CatalogueModule,
        NavigationModule,
        FurnitureModule,
        RoomModule,
        PermissionModule,
        ModerationModule,
        FriendshipModule
    ],
    providers: [
        GameService
    ],
    exports: [
        GameService
    ]
})
export class GameModule {}