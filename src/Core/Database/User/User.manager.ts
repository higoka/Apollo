import { Injectable } from '@nestjs/common';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { UserEntity } from './User.entity';
import { UserProvider } from './User.provider';
import { UserCurrencyEntity } from './UserCurrency.entity';
import { UserPermissionEntity } from './UserPermission.entity';
import { UserSettingsEntity } from './UserSettings.entity';

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

    async findPermission(): Promise<UserPermissionEntity[]> {
        var repository: Repository<UserPermissionEntity> = await this.userProvider.UserPermissions;
        return repository.find();
    }

    async insertHabboStats(userId: number): Promise<InsertResult> {
        var repository: Repository<UserSettingsEntity> = await this.userProvider.UserSettings;
        return repository.insert({
            user_id: userId
        });
    }

    async HabboStatsCounter(userId: number): Promise<number> {
        var repository: Repository<UserSettingsEntity> = await this.userProvider.UserSettings;
        return repository.count({
            where: {
                user_id: userId
            }
        })
    }

    async getHabboStats(userId: number): Promise<UserSettingsEntity> {
        var repository: Repository<UserSettingsEntity> = await this.userProvider.UserSettings;
        return repository.findOne({
            where: {
                user_id: userId
            }
        });
    }
}