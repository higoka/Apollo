import { NavigatorPublicCatsEntity } from "src/Core/Database/Navigator/NavigatorPublicCats.entity";

export class NavigatorPublicCategoryDefs {
    public id: number;
    public name: string;
    public rooms: Array<any>; // TODO: Change any to Rooms
    public image: string;
    public order: number;

    constructor(data: NavigatorPublicCatsEntity) {
        this.id = data.id;
        this.name = data.name;
        this.rooms = new Array<any>();
        this.image = data.image == 1 ? "THUMBNAILS" : "LIST";
        this.order = data.order_num;
    }

    public addRoom(room: any): void {
        this.rooms.push(room);
    }

    public removeRoom(room: any): void {
        this.rooms[room] = null;
    }
}