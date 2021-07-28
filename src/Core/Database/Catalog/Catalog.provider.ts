import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from '../Database.provider';
import { Connection, Repository } from 'typeorm';
import { CatalogPagesEntity } from './CatalogPages.entity';

@Injectable()
export class CatalogProvider {
    constructor(
        private readonly databaseProvider: DatabaseProvider
    ) {
        
    }

    get CatalogPagesRepository(): Promise<Repository<CatalogPagesEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(CatalogPagesEntity);
        });
    }
}