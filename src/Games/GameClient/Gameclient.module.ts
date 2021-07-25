import { Module } from '@nestjs/common';
import { GameclientService } from './Gameclient.service';

@Module({
    providers: [
        GameclientService
    ],
    exports: [
        GameclientService
    ]
})
export class GameclientModule {}