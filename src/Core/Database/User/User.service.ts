import { Injectable, Inject } from '@nestjs/common';
import { UserEntity } from './User.entity';
import { UserProvider } from './User.provider';
import { UserCurrencyEntity } from './UserCurrency.entity';

@Injectable()
export class UserService {
    constructor(
        private readonly userProvider: UserProvider
    ) {
        
    }

    async findBySSO(sso: string): Promise<UserEntity> {
        return this.userProvider.userRepository.findOne({
            where: { 
                auth_ticket: sso
            }
        });
    }

    async findCurrencyByUserId(userId: number): Promise<UserCurrencyEntity[]> {
        return this.userProvider.userCurrencyRepository.find({
            where: { 
                user_id: userId
            }
        });
    }
}