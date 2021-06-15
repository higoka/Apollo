import { Module } from '@nestjs/common';
import { GameclientDefs } from './Gameclient.defs';
import { GameclientService } from './Gameclient.service';

@Module({
    providers: [
        GameclientDefs,
        GameclientService
    ],
    exports: [
        GameclientService
    ]
})
export class GameclientModule {}