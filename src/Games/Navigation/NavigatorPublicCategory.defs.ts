import { NavigatorPublicCatsEntity } from "src/Core/Database/Navigator/NavigatorPublicCats.entity";
import { RoomDefs } from "../Rooms/Room.defs";

export class NavigatorPublicCategoryDefs {
    public id: number;
    public name: string;
    public rooms: Array<RoomDefs>;
    public image: string;
    public order: number;

    constructor(data: NavigatorPublicCatsEntity) {
        this.id = data.id;
        this.name = data.name;
        this.rooms = new Array<RoomDefs>();
        this.image = data.image == 1 ? "THUMBNAILS" : "LIST";
        this.order = data.order_num;
    }
}