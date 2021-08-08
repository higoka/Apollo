import { Module } from '@nestjs/common';
import { NavigatorModule } from 'src/Core/Database/Navigator/Navigator.module';
import { RoomModule } from '../Rooms/Room.module';
import { NavigationService } from './Navigation.service';

@Module({
    imports: [
        NavigatorModule,
        RoomModule
    ],
    providers: [
        NavigationService
    ],
    exports: [
        NavigationService
    ]
})
export class NavigationModule {}