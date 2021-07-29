import { Module } from '@nestjs/common';
import { ItemsModule } from 'src/Core/Database/Items/Items.module';
import { FurnitureService } from './Furniture.service';

@Module({
    imports: [
        ItemsModule
    ],
    providers: [
        FurnitureService
    ],
    exports: [
        FurnitureService
    ]
})
export class FurnitureModule {}