import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database.module';
import { RoomsProvider } from './Rooms.provider';
import { RoomsService } from './Rooms.service';

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        RoomsService,
        RoomsProvider
    ],
    exports: [
        RoomsService
    ]
})
export class RoomsModule {}