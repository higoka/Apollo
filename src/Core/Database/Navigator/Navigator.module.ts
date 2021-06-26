import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database.module';
import { NavigatorProvider } from './Navigator.provider';
import { NavigatorService } from './Navigator.service';

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        NavigatorProvider,
        NavigatorService
    ],
    exports: [
        NavigatorService
    ]
})
export class NavigatorModule {}