import { Injectable } from '@nestjs/common';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { UserEntity } from './User.entity';
import { UserProvider } from './User.provider';
import { UserCurrencyEntity } from './UserCurrency.entity';

@Injectable()
export class UserManager {
    constructor(
        private readonly userProvider: UserProvider
    ) {
        
    }

    async findBySSO(sso: string): Promise<UserEntity> {
        var repository: Repository<UserEntity> = await this.userProvider.User;
        return repository.findOne({
            where: { 
                auth_ticket: sso
            }
        });
    }

    async findCurrencyByUserId(userId: number): Promise<UserCurrencyEntity[]> {
        var repository: Repository<UserCurrencyEntity> = await this.userProvider.UserCurrencies;
        return repository.find({
            where: {
                user_id: userId
            }
        });
    }

    async changeState(userId: number, state: string): Promise<UpdateResult> {
        var repository: Repository<UserEntity> = await this.userProvider.User;
        return repository.update(userId, {
            online: state
        });
    }
}