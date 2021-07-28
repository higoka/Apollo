import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CatalogProvider } from './Catalog.provider';
import { CatalogPagesEntity } from './CatalogPages.entity';

@Injectable()
export class CatalogService {
    constructor(
        private readonly catalogProvider: CatalogProvider
    ) {
        
    }

    async getCatalogPages(): Promise<CatalogPagesEntity[]> {
        var repository: Repository<CatalogPagesEntity> = await this.catalogProvider.CatalogPagesRepository;
        return repository.find({
            order: {
                id: 'DESC',
                parent_id: 'DESC'
            }
        });
    }
}