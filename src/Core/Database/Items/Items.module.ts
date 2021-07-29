import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database.module';
import { ItemsProvider } from './Items.provider';
import { ItemsService } from './Items.service';

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        ItemsProvider,
        ItemsService
    ],
    exports: [
        ItemsService
    ]
})
export class ItemsModule {}