import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './User.entity';
import { UserProvider } from './User.provider';

@Injectable()
export class UserService {
    constructor(
        private readonly userProvider: UserProvider
    ) {
        
    }

    async findBySSO(sso: string): Promise<User> {
        return this.userProvider.userRepository.findOne({
            where: { 
                auth_ticket: sso
            }
        });
    }
}