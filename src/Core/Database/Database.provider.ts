import { Injectable } from '@nestjs/common';
import { createConnection, getConnectionManager, getConnection, Connection } from 'typeorm';
import { ConfigurationService } from '../Configuration/Configuration.service';
import { CatalogItemsEntity } from './Catalog/CatalogItems.entity';
import { CatalogPagesEntity } from './Catalog/CatalogPages.entity';
import { EmulatorSettingsEntity } from './Emulator/EmulatorSettings.entity';
import { EmulatorTextsEntity } from './Emulator/EmulatorTexts.entity';
import { ItemsBaseEntity } from './Items/ItemsBase.entity';
import { UserEntity } from './User/User.entity';
import { UserCurrencyEntity } from './User/UserCurrency.entity';
import { UserPermissionEntity } from './User/UserPermission.entity';

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
                UserEntity,
                UserCurrencyEntity,
                UserPermissionEntity,
                EmulatorSettingsEntity,
                EmulatorTextsEntity,
                CatalogPagesEntity,
                CatalogItemsEntity,
                ItemsBaseEntity
            ],
            synchronize: false,
        });
    }

    async getConnection(): Promise<Connection> {
        if (getConnectionManager().has("Apollo")) {
            if (getConnection("Apollo").isConnected) {
                return getConnection("Apollo");
            } else {
                return getConnection("Apollo").connect();
            }
        }
    }
}