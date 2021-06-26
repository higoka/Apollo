import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from '../Database.provider';
import { Connection, Repository } from 'typeorm';
import { NavigatorFilterEntity } from './NavigatorFilter.entity';
import { NavigatorFlatCatsEntity } from './NavigatorFlatCats.entity';
import { NavigatorPublicCatsEntity } from './NavigatorPublicCats.entity';
import { NavigatorPublicsEntity } from './NavigatorPublics.entity';

@Injectable()
export class NavigatorProvider {
    constructor(
        private readonly databaseProvider: DatabaseProvider
    ) {
        
    }

    get NavigatorFilterRepository(): Promise<Repository<NavigatorFilterEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(NavigatorFilterEntity);
        });
    }

    get NavigatorFlatCatsRepository(): Promise<Repository<NavigatorFlatCatsEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(NavigatorFlatCatsEntity);
        });
    }

    get NavigatorPublicCatsRepository(): Promise<Repository<NavigatorPublicCatsEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(NavigatorPublicCatsEntity);
        });
    }

    get NavigatorPublicsRepository(): Promise<Repository<NavigatorPublicsEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(NavigatorPublicsEntity);
        });
    }
}