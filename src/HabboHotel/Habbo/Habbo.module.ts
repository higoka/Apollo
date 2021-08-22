import { Module } from '@nestjs/common';
import { UserModule } from 'src/Core/Database/User/User.module';
import { HabboManager } from './Habbo.manager';

@Module({
    imports: [
        UserModule
    ],
    providers: [
        HabboManager
    ],
    exports: [
        HabboManager
    ]
})
export class HabboModule {}