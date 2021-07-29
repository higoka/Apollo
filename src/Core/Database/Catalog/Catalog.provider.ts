import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from '../Database.provider';
import { Connection, Repository } from 'typeorm';
import { CatalogPagesEntity } from './CatalogPages.entity';
import { CatalogItemsEntity } from './CatalogItems.entity';
import { CatalogueItemDefs } from 'src/Games/Catalogue/CatalogueItem.defs';

@Injectable()
export class CatalogProvider {
    constructor(
        private readonly databaseProvider: DatabaseProvider
    ) {
        
    }

    get CatalogItemsRepository(): Promise<Repository<CatalogItemsEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(CatalogItemsEntity);
        });
    }

    get CatalogPagesRepository(): Promise<Repository<CatalogPagesEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(CatalogPagesEntity);
        });
    }
}