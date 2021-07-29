import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ItemsProvider } from './Items.provider';
import { ItemsBaseEntity } from './ItemsBase.entity';

@Injectable()
export class ItemsService {
    constructor(
        private readonly itemsProvider: ItemsProvider
    ) {
        
    }

    async getItemsBase(): Promise<ItemsBaseEntity[]> {
        var repository: Repository<ItemsBaseEntity> = await this.itemsProvider.ItemsBaseRepository;
        return repository.find({
            order: {
                id: 'ASC'
            }
        });
    }
}