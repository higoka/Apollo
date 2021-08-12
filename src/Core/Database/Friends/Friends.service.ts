import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../User/User.entity';
import { FriendsProvider } from './Friends.provider';
import { MessengerFriendsEntity } from './MessengerFriends.entity';

@Injectable()
export class FriendsService {
    constructor(
        private readonly friendsProvider: FriendsProvider
    ) {
        
    }

    async getMessengerById(userId: number): Promise<MessengerFriendsEntity[]> {
        var repository: Repository<MessengerFriendsEntity> = await this.friendsProvider.MessengerFriends;
        return repository.find({
            relations: ['habbo'],
            where: {
                user_one_id: userId
            }
        });
    }
}