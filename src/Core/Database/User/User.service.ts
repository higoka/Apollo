import { Injectable } from '@nestjs/common';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { UserEntity } from './User.entity';
import { UserProvider } from './User.provider';
import { UserCurrencyEntity } from './UserCurrency.entity';
import { UserPermissionEntity } from './UserPermission.entity';

@Injectable()
export class UserService {
    constructor(
        private readonly userProvider: UserProvider
    ) {
        
    }

    async findBySSO(sso: string): Promise<UserEntity> {
        var repository: Repository<UserEntity> = await this.userProvider.userRepository;
        return repository.findOne({
            where: { 
                auth_ticket: sso
            }
        });
    }

    async findCurrencyByUserId(userId: number): Promise<UserCurrencyEntity[]> {
        var repository: Repository<UserCurrencyEntity> = await this.userProvider.userCurrencyRepository;
        return repository.find({
            where: { 
                user_id: userId
            }
        });
    }

    async findPermission(): Promise<UserPermissionEntity[]> {
        var repository: Repository<UserPermissionEntity> = await this.userProvider.userPermissionRepository;
        return repository.find();
    }
}