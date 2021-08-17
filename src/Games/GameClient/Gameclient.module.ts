import { forwardRef, Module } from '@nestjs/common';
import { HabboModule } from '../User/Habbo.module';
import { GameclientService } from './Gameclient.service';

@Module({
    imports: [
        forwardRef(() => HabboModule)
    ],
    providers: [
        GameclientService
    ],
    exports: [
        GameclientService
    ]
})
export class GameclientModule {}