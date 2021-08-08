import { RoomsModelsEntity } from "src/Core/Database/Rooms/RoomsModels.entity";

export class RoomModelDefs {
    public name: string;
    public door_x: number;
    public door_y: number;
    public door_dir: number;
    public heightmap: string;
    public public_items: string;
    public club_only: boolean;

    constructor(data: RoomsModelsEntity) {
        this.name = data.name;
        this.door_x = data.door_x;
        this.door_y = data.door_y;
        this.door_y = data.door_y;
        this.heightmap = data.heightmap;
        this.public_items = data.public_items;
        this.club_only = (data.club_only == 1);
    }
}