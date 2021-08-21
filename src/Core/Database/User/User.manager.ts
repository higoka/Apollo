import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { UserEntity } from './User.entity';
import { UserProvider } from './User.provider';
import { UserCurrencyEntity } from './UserCurrency.entity';
import { UserInfoEntity } from './UserInfo.entity';

@Injectable()
export class UserManager {
    constructor(
        private readonly userProvider: UserProvider
    ) {
        
    }

    async findBySSO(sso: string): Promise<UserEntity> {
        var repository: Repository<UserEntity> = await this.userProvider.User;
        return repository.findOne({
            relations: ['user_info', 'user_settings'],
            where: {
                user_info: {
                    auth_ticket: sso
                }
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
        var repository: Repository<UserInfoEntity> = await this.userProvider.UserInfo;
        return repository.update(userId, {
            online: parseInt('1')
        });
    }
}