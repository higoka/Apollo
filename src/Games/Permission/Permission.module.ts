import { Module } from '@nestjs/common';
import { UserModule } from "src/Core/Database/User/User.module";
import { PermissionService } from './Permission.service';

@Module({
    imports: [
        UserModule
    ],
    providers: [
        PermissionService
    ],
    exports: [
        PermissionService
    ]
})
export class PermissionModule {}