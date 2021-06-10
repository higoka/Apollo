import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './User.entity';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>
    ) {
        
    }

    async findBySSO(sso: string): Promise<User> {
        return this.userRepository.findOne({
            where: { 
                auth_ticket: sso
            }
        });
    }
}