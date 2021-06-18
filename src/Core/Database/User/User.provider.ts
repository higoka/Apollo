import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from '../Database.provider';
import { Repository } from 'typeorm';
import { UserEntity } from "./User.entity";
import { UserCurrencyEntity } from './UserCurrency.entity';

@Injectable()
export class UserProvider {
    constructor(
        private readonly databaseProvider: DatabaseProvider
    ) {
        
    }

    get userRepository(): Repository<UserEntity> {
        return this.databaseProvider.getConnection().getRepository(UserEntity);
    }

    get userCurrencyRepository(): Repository<UserCurrencyEntity> {
        return this.databaseProvider.getConnection().getRepository(UserCurrencyEntity);
    }
}