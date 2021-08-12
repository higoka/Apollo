import { Injectable } from '@nestjs/common';
import { createConnection, getConnectionManager, getConnection, Connection } from 'typeorm';
import { ConfigurationService } from '../Configuration/Configuration.service';
import { CatalogItemsEntity } from './Catalog/CatalogItems.entity';
import { CatalogPagesEntity } from './Catalog/CatalogPages.entity';
import { EmulatorSettingsEntity } from './Emulator/EmulatorSettings.entity';
import { EmulatorTextsEntity } from './Emulator/EmulatorTexts.entity';
import { MessengerFriendsEntity } from './Friends/MessengerFriends.entity';
import { ItemsBaseEntity } from './Items/ItemsBase.entity';
import { ModerationCategoryEntity } from './ModTools/ModerationCategory.entity';
import { ModerationPresetEntity } from './ModTools/ModerationPreset.entity';
import { NavigatorFilterEntity } from './Navigator/NavigatorFilter.entity';
import { NavigatorFlatCatsEntity } from './Navigator/NavigatorFlatCats.entity';
import { NavigatorPublicCatsEntity } from './Navigator/NavigatorPublicCats.entity';
import { NavigatorPublicsEntity } from './Navigator/NavigatorPublics.entity';
import { RoomsEntity } from './Rooms/Rooms.entity';
import { RoomsModelsEntity } from './Rooms/RoomsModels.entity';
import { UserEntity } from './User/User.entity';
import { UserCurrencyEntity } from './User/UserCurrency.entity';
import { UserPermissionEntity } from './User/UserPermission.entity';
import { UserSettingsEntity } from './User/UserSettings.entity';

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
                UserSettingsEntity,
                EmulatorSettingsEntity,
                EmulatorTextsEntity,
                CatalogPagesEntity,
                CatalogItemsEntity,
                ItemsBaseEntity,
                NavigatorFilterEntity,
                NavigatorFlatCatsEntity,
                NavigatorPublicCatsEntity,
                NavigatorPublicsEntity,
                RoomsEntity,
                RoomsModelsEntity,
                ModerationCategoryEntity,
                ModerationPresetEntity,
                MessengerFriendsEntity
            ],
            synchronize: false
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