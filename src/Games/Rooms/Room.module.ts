import { Module } from '@nestjs/common';
import { RoomsModule } from 'src/Core/Database/Rooms/Rooms.module';
import { RoomService } from './Room.service';

@Module({
    imports: [
        RoomsModule
    ],
    providers: [
        RoomService
    ],
    exports: [
        RoomService
    ]
})
export class RoomModule {}