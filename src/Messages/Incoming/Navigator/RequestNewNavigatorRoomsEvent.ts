import { NavigationService } from 'src/Games/Navigation/Navigation.service';
import { NavigatorFilterDefs } from 'src/Games/Navigation/NavigatorFilter.defs';
import { RoomDefs } from 'src/Games/Rooms/Room.defs';
import { MessageHandler } from '../message.handler';

export class RequestNewNavigatorRoomsEvent extends MessageHandler {
    private navigationService: NavigationService;

    constructor(navigationService: NavigationService) {
        super();

        this.navigationService = navigationService
    }

    public handle(): void {
        var view: string = this.entryPacket.readString();
        var query: string = this.entryPacket.readString();

        if (view.includes("query")) view = "hotel_view";
        if (view.includes("groups")) view = "hotel_view";

        var filter: NavigatorFilterDefs = this.navigationService.filters.get(view);

        if (filter == null) {
            //var rooms: Array<RoomDefs> = this.navigationService;
        }
    }
}