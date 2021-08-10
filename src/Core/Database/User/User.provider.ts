import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from '../Database.provider';
import { Connection, Repository } from 'typeorm';
import { UserEntity } from "./User.entity";
import { UserCurrencyEntity } from './UserCurrency.entity';
import { UserPermissionEntity } from './UserPermission.entity';
import { UserSettingsEntity } from './UserSettings.entity';

@Injectable()
export class UserProvider {
    constructor(
        private readonly databaseProvider: DatabaseProvider
    ) {
        
    }

    get userRepository(): Promise<Repository<UserEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(UserEntity);
        });
    }

    get userCurrencyRepository(): Promise<Repository<UserCurrencyEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(UserCurrencyEntity);
        });
    }

    get userPermissionRepository(): Promise<Repository<UserPermissionEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(UserPermissionEntity);
        });
    }

    get userSettingsRepository(): Promise<Repository<UserSettingsEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(UserSettingsEntity);
        });
    }
}