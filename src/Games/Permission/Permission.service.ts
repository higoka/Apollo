import { Injectable, Logger } from '@nestjs/common';
import { DatabaseProvider } from 'src/Core/Database/Database.provider';
import { UserService } from 'src/Core/Database/User/User.service';
import { UserPermissionEntity } from 'src/Core/Database/User/UserPermission.entity';
import { RankDefs } from './Rank.defs';

@Injectable()
export class PermissionService {
    private readonly logger = new Logger(PermissionService.name);
    public rank: Map<number, RankDefs>;

    constructor(
        private readonly userService: UserService
    ) {
        this.rank = new Map<number, RankDefs>();

        this.loadPermission();
    }

    private async loadPermission(): Promise<void> {
        return this.userService.findPermission().then((permissions: UserPermissionEntity[]) => {
            permissions.forEach((permission: UserPermissionEntity) => {
                if (!this.rank.has(permission.id)) {
                    this.rank.set(permission.id, new RankDefs(permission));
                }
            });
        });
    }
}