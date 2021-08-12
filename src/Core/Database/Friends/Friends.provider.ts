import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from '../Database.provider';
import { Connection, Repository } from 'typeorm';
import { MessengerFriendsEntity } from './MessengerFriends.entity';

@Injectable()
export class FriendsProvider {
    constructor(
        private readonly databaseProvider: DatabaseProvider
    ) {
        
    }

    get MessengerFriends(): Promise<Repository<MessengerFriendsEntity>> {
        return this.databaseProvider.getConnection().then((conn: Connection) => {
            return conn.getRepository(MessengerFriendsEntity);
        });
    }
}