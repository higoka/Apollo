import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from '../Database.provider';
import { Connection, Repository } from 'typeorm';
import { RoomsEntity } from './Rooms.entity';
import { RoomsModelsEntity } from './RoomsModels.entity';

@Injectable()
export class RoomsProvider {
    constructor(
        private readonly databaseProvider: DatabaseProvider
    ) {
        
    }

    get RoomsRepository(): Promise<Repository<RoomsEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(RoomsEntity);
        });
    }

    get RoomsModelsRepository(): Promise<Repository<RoomsModelsEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(RoomsModelsEntity);
        });
    }
}