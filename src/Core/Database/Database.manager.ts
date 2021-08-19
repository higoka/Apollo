import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ApolloManager } from 'src/Apollo.manager';
import { createConnection, getConnectionManager, getConnection, Connection } from 'typeorm';
import { UserEntity } from './User/User.entity';
import { UserManager } from './User/User.manager';
import { UserCurrencyEntity } from './User/UserCurrency.entity';

@Injectable()
export class DatabaseManager {
    constructor(
        @Inject(forwardRef(() => ApolloManager))
        private readonly apolloManager: ApolloManager,
        @Inject(forwardRef(() => UserManager))
        private readonly userManager: UserManager
    ) {
        this.create();
    }

    private async create(): Promise<Connection> {
        return await createConnection({
            name: "Apollo",
            type: 'mysql',
            host: this.apolloManager.CoreManager.ConfigurationManager.getString("database.host"),
            port: this.apolloManager.CoreManager.ConfigurationManager.getInt("database.port"),
            username: this.apolloManager.CoreManager.ConfigurationManager.getString("database.user"),
            password: this.apolloManager.CoreManager.ConfigurationManager.getString("database.psw"),
            database: this.apolloManager.CoreManager.ConfigurationManager.getString("database.source"),
            entities: [
                UserEntity,
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

    public get UserManager(): UserManager {
        return this.userManager;
    }
}