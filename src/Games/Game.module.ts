import { Module } from '@nestjs/common';
import { CatalogueModule } from './Catalogue/Catalogue.module';
import { FurnitureModule } from './Furniture/Furniture.module';
import { GameService } from './Game.service';
import { GameclientModule } from './GameClient/Gameclient.module';
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
        PermissionModule
    ],
    providers: [
        GameService
    ],
    exports: [
        GameService
    ]
})
export class GameModule {}