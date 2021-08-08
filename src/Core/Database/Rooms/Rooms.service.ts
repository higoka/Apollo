import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RoomsEntity } from './Rooms.entity';
import { RoomsProvider } from './Rooms.provider';
import { RoomsModelsEntity } from './RoomsModels.entity';

@Injectable()
export class RoomsService {
    constructor(
        private readonly roomsProvider: RoomsProvider
    ) {
        
    }

    async getAllRooms(): Promise<RoomsEntity[]> {
        var repository: Repository<RoomsEntity> = await this.roomsProvider.RoomsRepository;
        return repository.find();
    }

    async getRoomByRoomId(roomId: number): Promise<RoomsEntity> {
        var repository: Repository<RoomsEntity> = await this.roomsProvider.RoomsRepository;
        return repository.findOne({
            where: {
                id: roomId
            }
        });
    }

    async getAllRoomsModels(): Promise<RoomsModelsEntity[]> {
        var repository: Repository<RoomsModelsEntity> = await this.roomsProvider.RoomsModelsRepository;
        return repository.find();
    }

    async getRoomsByOwnerId(ownerId: number): Promise<RoomsEntity[]> {
        var repository: Repository<RoomsEntity> = await this.roomsProvider.RoomsRepository;
        return repository.find({
            where: {
                owner_id: ownerId
            }
        });
    }
}