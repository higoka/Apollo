import { Injectable } from '@nestjs/common';
import { createConnection, getConnectionManager, getConnection, Connection } from 'typeorm';
import { ConfigurationService } from '../Configuration/Configuration.service';
import { User } from './User/User.entity';

@Injectable()
export class DatabaseProvider {
    constructor(
        private readonly configurationService: ConfigurationService
    ) {
        this.create();
    }

    async create(): Promise<Connection> {
        return await createConnection({
            name: "Apollo",
            type: 'mysql',
            host: this.configurationService.getString("database.host"),
            port: this.configurationService.getInt("database.port"),
            username: this.configurationService.getString("database.user"),
            password: this.configurationService.getString("database.psw"),
            database: this.configurationService.getString("database.source"),
            entities: [
                User
            ],
            synchronize: false,
        });
    }

    getConnection(): any {
        if (getConnectionManager().has("Apollo")) {
            if (getConnection("Apollo").isConnected) {
                return getConnection("Apollo");
            } else {
                return getConnection("Apollo").connect();
            }
        }
    }
}