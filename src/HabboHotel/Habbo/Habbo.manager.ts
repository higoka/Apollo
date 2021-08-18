import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ApolloManager } from 'src/Apollo.manager';
import { UserEntity } from 'src/Core/Database/User/User.entity';

@Injectable()
export class HabboManager {
    constructor(
        @Inject(forwardRef(() => ApolloManager))
        private readonly apolloManager: ApolloManager
    ) {

    }

    // TODO: Finish
    public async loadHabbo(sso: string): Promise<void> {
        return this.apolloManager.CoreManager.DatabaseManager.UserManager.findBySSO(sso).then((user: UserEntity) => {
            
        });
    }
}