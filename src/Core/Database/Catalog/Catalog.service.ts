import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CatalogProvider } from './Catalog.provider';
import { CatalogItemsEntity } from './CatalogItems.entity';
import { CatalogPagesEntity } from './CatalogPages.entity';

@Injectable()
export class CatalogService {
    constructor(
        private readonly catalogProvider: CatalogProvider
    ) {
        
    }

    async getCatalogItems(): Promise<CatalogItemsEntity[]> {
        var repository: Repository<CatalogItemsEntity> = await this.catalogProvider.CatalogItemsRepository;
        return repository.find({
            order: {
                id: 'ASC'
            }
        });
    }

    async getCatalogPages(): Promise<CatalogPagesEntity[]> {
        var repository: Repository<CatalogPagesEntity> = await this.catalogProvider.CatalogPagesRepository;
        return repository.find({
            order: {
                id: 'ASC'
            }
        });
    }
}