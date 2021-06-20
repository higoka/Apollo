import { Module } from '@nestjs/common';
import { UserModule } from 'src/Core/Database/User/User.module';
import { GameclientModule } from '../GameClient/Gameclient.module';
import { HabboDefs } from './Habbo.defs';
import { HabboService } from './Habbo.service';
import { HabboInfoDefs } from './HabboInfo.defs';
import { HabboStatsDefs } from './HabboStats.defs';

@Module({
    imports: [
        GameclientModule,
        UserModule
    ],
    providers: [
        HabboDefs,
        HabboInfoDefs,
        HabboStatsDefs,
        HabboService
    ],
    exports: [
        HabboService
    ]
})
export class HabboModule {}