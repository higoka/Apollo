import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { NavigatorProvider } from './Navigator.provider';
import { NavigatorFilterEntity } from './NavigatorFilter.entity';
import { NavigatorPublicCatsEntity } from './NavigatorPublicCats.entity';
import { NavigatorPublicsEntity } from './NavigatorPublics.entity';

@Injectable()
export class NavigatorService {
    constructor(
        private readonly navigatorProvider: NavigatorProvider
    ) {
        
    }

    async getPublicCategories(): Promise<NavigatorPublicCatsEntity[]> {
        var repository: Repository<NavigatorPublicCatsEntity> = await this.navigatorProvider.NavigatorPublicCatsRepository;
        return repository.find({
            where: {
                visible: 1
            }
        });
    }

    async getPublicRooms(): Promise<NavigatorPublicsEntity[]> {
        var repository: Repository<NavigatorPublicsEntity> = await this.navigatorProvider.NavigatorPublicsRepository;
        return repository.find({
            where: {
                visible: 1
            }
        });
    }

    async getFilter(): Promise<NavigatorFilterEntity[]> {
        var repository: Repository<NavigatorFilterEntity> = await this.navigatorProvider.NavigatorFilterRepository;
        return repository.find();
    }
}