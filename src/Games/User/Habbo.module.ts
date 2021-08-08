import { Module } from '@nestjs/common';
import { UserModule } from 'src/Core/Database/User/User.module';
import { GameclientModule } from '../GameClient/Gameclient.module';
import { HabboService } from './Habbo.service';

@Module({
    imports: [
        GameclientModule,
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