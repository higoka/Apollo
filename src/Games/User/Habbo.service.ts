import { Dependencies } from '@nestjs/common'
import { User } from "src/Core/Database/User/User.entity";
import { UserService } from "src/Core/Database/User/User.service";

@Dependencies(UserService)
export class HabboService {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async loadHabbo(sso: string): Promise<User> {
        return this.userService.findBySSO(sso).then((user: User) => {
            return user;
        })
    }
}