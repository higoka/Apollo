import { Injectable } from '@nestjs/common';
import { DatabaseManager } from '../Database.manager';
import { Connection, Repository } from 'typeorm';
import { UserEntity } from "./User.entity";
import { UserCurrencyEntity } from './UserCurrency.entity';
import { UserInfoEntity } from './UserInfo.entity';
import { UserSettingsEntity } from './UserSettngs.entity';

@Injectable()
export class UserProvider {
    constructor(
        private readonly databaseManager: DatabaseManager
    ) {
        
    }

    public get User(): Promise<Repository<UserEntity>> {
        return this.databaseManager.getConnection().then((conn: Connection) => {
            return conn.getRepository(UserEntity);
        });
    }

    public get UserInfo(): Promise<Repository<UserInfoEntity>> {
        return this.databaseManager.getConnection().then((conn: Connection) => {
            return conn.getRepository(UserInfoEntity);
        });
    }

    public get UserSettings(): Promise<Repository<UserSettingsEntity>> {
        return this.databaseManager.getConnection().then((conn: Connection) => {
            return conn.getRepository(UserSettingsEntity);
        });
    }

    public get UserCurrencies(): Promise<Repository<UserCurrencyEntity>> {
        return this.databaseManager.getConnection().then((conn: Connection) => {
            return conn.getRepository(UserCurrencyEntity);
        });
    }
}