import { Injectable } from '@nestjs/common'
import { UserService } from "src/Core/Database/User/User.service";

@Injectable()
export class HabboService {
    constructor(
        private readonly userService: UserService
    ) {

    }
}