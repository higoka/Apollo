import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ApolloManager } from 'src/Apollo.manager';
import { UserEntity } from 'src/Core/Database/User/User.entity';
import { HabboDefs } from './Habbo.defs';

@Injectable()
export class HabboManager {
    private usersOnline: Map<number, HabboDefs>;

    constructor(
        @Inject(forwardRef(() => ApolloManager))
        private readonly apolloManager: ApolloManager
    ) {
        this.usersOnline = new Map<number, HabboDefs>();
    }

    // TODO: Finish
    public async loadHabbo(sso: string): Promise<HabboDefs> {
        var habbo: HabboDefs;

        return this.apolloManager.CoreManager.DatabaseManager.UserManager.findBySSO(sso).then((user: UserEntity) => {
            habbo = new HabboDefs(user, this.apolloManager);
            return habbo;
        })
    }

    public addOnlineUsers(userId: number, habbo: HabboDefs): void {
        this.usersOnline.set(userId, habbo);
    }
}