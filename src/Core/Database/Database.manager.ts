import { Injectable } from '@nestjs/common';
import { createConnection, getConnectionManager, getConnection, Connection } from 'typeorm';
import { ConfigurationManager } from '../Configuration/Configuration.manager';
import { UserEntity } from './User/User.entity';
import { UserCurrencyEntity } from './User/UserCurrency.entity';
import { UserInfoEntity } from './User/UserInfo.entity';
import { UserSettingsEntity } from './User/UserSettngs.entity';

@Injectable()
export class DatabaseManager {
    constructor(
        private readonly configurationManager: ConfigurationManager
    ) {
        this.create();
    }

    private async create(): Promise<Connection> {
        return await createConnection({
            name: "Apollo",
            type: 'mysql',
            host: this.configurationManager.getString("database.host"),
            port: this.configurationManager.getInt("database.port"),
            username: this.configurationManager.getString("database.user"),
            password: this.configurationManager.getString("database.psw"),
            database: this.configurationManager.getString("database.source"),
            entities: [
                UserEntity,
                UserInfoEntity,
                UserSettingsEntity,
                UserCurrencyEntity
            ],
            synchronize: false
        });
    }

    public async getConnection(): Promise<Connection> {
        if (getConnectionManager().has("Apollo")) {
            if (getConnection("Apollo").isConnected) {
                return getConnection("Apollo");
            } else {
                return getConnection("Apollo").connect();
            }
        }
    }
}