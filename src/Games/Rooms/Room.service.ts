import { Injectable, Logger } from '@nestjs/common';
import { RoomsEntity } from 'src/Core/Database/Rooms/Rooms.entity';
import { RoomsService } from 'src/Core/Database/Rooms/Rooms.service';
import { RoomsModelsEntity } from 'src/Core/Database/Rooms/RoomsModels.entity';
import { HabboDefs } from '../User/Habbo.defs';
import { RoomDefs } from './Room.defs';
import { RoomModelDefs } from './RoomModel.defs';

@Injectable()
export class RoomService {
    private readonly logger = new Logger(RoomService.name);
    public activeRooms: Map<number, RoomDefs>;
    public roomModels: Map<string, RoomModelDefs>;

    constructor(
        private readonly roomsService: RoomsService
    ) {
        this.roomModels = new Map<string, RoomModelDefs>();
        this.activeRooms = new Map<number, RoomDefs>();

        this.loadRoomModels();
    }

    private async loadRoomModels(): Promise<void> {
        this.roomModels.clear();

        return this.roomsService.getAllRoomsModels().then((models: RoomsModelsEntity[]) => {
            this.logger.log("Loaded " + models.length + " room models");
            for (var model of models) {
                this.roomModels.set(model.name, new RoomModelDefs(model));
            }
        })
    }

    public async loadRoomsByHabbo(habbo: HabboDefs): Promise<void> {
        return this.roomsService.getRoomsByOwnerId(habbo.habboInfo.id).then((rooms: RoomsEntity[]) => {
            for (var room of rooms) {
                if (!this.activeRooms.has(room.id))
                    this.activeRooms.set(room.id, new RoomDefs(room, this.roomModels.get(room.model)));
            }
        });
    }

    public loadRoom(roomId: number, load: boolean): RoomDefs {
        var room: RoomDefs = null;

        if (this.activeRooms.has(roomId)) {
            room = this.activeRooms.get(roomId);

            if (load) {
                room.loadData();
            }
            return room;
        }

        this.roomsService.getRoomByRoomId(roomId).then((roomData: RoomsEntity) => {
            room = new RoomDefs(roomData, this.roomModels.get(roomData.model));
            if (load) {
                room.loadData();
            }
            if (room != null) {
                this.activeRooms.set(room.id, room);
            }
        });

        return room;
    }
}