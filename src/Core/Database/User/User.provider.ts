import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { DatabaseManager } from '../Database.manager';
import { Connection, Repository } from 'typeorm';
import { UserEntity } from "./User.entity";
import { UserCurrencyEntity } from './UserCurrency.entity';
import { UserPermissionEntity } from './UserPermission.entity';
import { UserSettingsEntity } from './UserSettings.entity';

@Injectable()
export class UserProvider {
    constructor(
        @Inject(forwardRef(() => DatabaseManager))
        private readonly databaseManager: DatabaseManager
    ) {
        
    }

    get User(): Promise<Repository<UserEntity>> {
        return this.databaseManager.getConnection().then((conn: Connection) => {
            return conn.getRepository(UserEntity);
        });
    }

    get UserCurrencies(): Promise<Repository<UserCurrencyEntity>> {
        return this.databaseManager.getConnection().then((conn: Connection) => {
            return conn.getRepository(UserCurrencyEntity);
        });
    }

    get UserPermissions(): Promise<Repository<UserPermissionEntity>> {
        return this.databaseManager.getConnection().then((conn: Connection) => {
            return conn.getRepository(UserPermissionEntity);
        });
    }

    get UserSettings(): Promise<Repository<UserSettingsEntity>> {
        return this.databaseManager.getConnection().then((conn: Connection) => {
            return conn.getRepository(UserSettingsEntity);
        });
    }
}