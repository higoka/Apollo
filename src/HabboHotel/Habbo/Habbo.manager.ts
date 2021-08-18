import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ApolloManager } from 'src/Apollo.manager';
import { UserEntity } from 'src/Core/Database/User/User.entity';
import { HabboDefs } from './Habbo.defs';

@Injectable()
export class HabboManager {
    constructor(
        @Inject(forwardRef(() => ApolloManager))
        private readonly apolloManager: ApolloManager
    ) {

    }

    // TODO: Finish
    public async loadHabbo(sso: string): Promise<void> {
        var habbo: HabboDefs;

        return this.apolloManager.CoreManager.DatabaseManager.UserManager.findBySSO(sso).then((user: UserEntity) => {
            habbo = new HabboDefs(user);
        })
    }
}