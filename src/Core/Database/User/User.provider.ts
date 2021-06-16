import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from '../Database.provider';
import { Repository } from 'typeorm';
import { User } from "./User.entity";

@Injectable()
export class UserProvider {
    constructor(
        private readonly databaseProvider: DatabaseProvider
    ) {
        
    }

    get userRepository(): Repository<User> {
        return this.databaseProvider.getConnection().getRepository(User);
    }
}