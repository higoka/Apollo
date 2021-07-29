import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from '../Database.provider';
import { Connection, Repository } from 'typeorm';
import { ItemsBaseEntity } from './ItemsBase.entity';

@Injectable()
export class ItemsProvider {
    constructor(
        private readonly databaseProvider: DatabaseProvider
    ) {
        
    }

    get ItemsBaseRepository(): Promise<Repository<ItemsBaseEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(ItemsBaseEntity);
        });
    }
}