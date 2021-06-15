import { Injectable } from '@nestjs/common'
import { User } from 'src/Core/Database/User/User.entity';
import { UserService } from "src/Core/Database/User/User.service";
import { HabboDefs } from './Habbo.defs';

@Injectable()
export class HabboService {
    constructor(
        private readonly userService: UserService
    ) {

    }

    async loadHabbo(sso: string): Promise<HabboDefs> {
        return this.userService.findBySSO(sso).then((user: User) => {
            return new HabboDefs(user);
        })
    }
}