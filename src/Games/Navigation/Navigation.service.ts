import { Injectable, Logger } from '@nestjs/common';
import { NavigatorService } from 'src/Core/Database/Navigator/Navigator.service';
import { NavigatorPublicCatsEntity } from 'src/Core/Database/Navigator/NavigatorPublicCats.entity';
import { NavigatorPublicsEntity } from 'src/Core/Database/Navigator/NavigatorPublics.entity';
import { RoomDefs } from 'src/Games/Rooms/Room.defs';
import { RoomService } from '../Rooms/Room.service';
import { NavigatorFilterDefs } from './NavigatorFilter.defs';
import { NavigatorPublicCategoryDefs } from './NavigatorPublicCategory.defs';

@Injectable()
export class NavigationService {
    private readonly logger = new Logger(NavigationService.name);
    public publicCategories: Map<number, NavigatorPublicCategoryDefs>;
    public filters: Map<string, NavigatorFilterDefs> = new Map<string, NavigatorFilterDefs>();

    constructor(
        private readonly navigatorService: NavigatorService,
        private readonly roomService: RoomService
    ) {

        this.filters.set("official_view", null);
        this.filters.set("hotel_view", null);
        this.filters.set("roomads_view", null);
        this.filters.set("myworld_view", null);
        this.filters.set("favorites", null);

        this.loadNavigator();
    }

    public loadNavigator(): Promise<void> {
        this.navigatorService.getPublicCategories().then((categories: NavigatorPublicCatsEntity[]) => {
            categories.forEach((category: NavigatorPublicCatsEntity) => {
                this.publicCategories.set(category.id, new NavigatorPublicCategoryDefs(category));
            });
        });

        this.navigatorService.getPublicRooms().then((rooms: NavigatorPublicsEntity[]) => {
            rooms.forEach((room: NavigatorPublicsEntity) => {
                var category: NavigatorPublicCategoryDefs = this.publicCategories.get(room.public_cat_id);

                if (category != null) {
                    var roomClass: RoomDefs = this.roomService.loadRoom(room.room_id, false);

                    if (roomClass != null) {
                        category.rooms.push(roomClass);
                    }
                }
            });
        });
        return;
    }
}