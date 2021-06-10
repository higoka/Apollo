import { Module } from '@nestjs/common';
import { UserModule } from 'src/Core/Database/User/User.module';
import { HabboService } from './Habbo.service';

@Module({
    imports: [
       UserModule
    ],
    providers: [
        HabboService
    ],
    exports: [
        HabboService
    ]
})
export class HabboModule {}