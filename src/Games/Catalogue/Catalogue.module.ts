import { Module } from '@nestjs/common';
import { CatalogModule } from 'src/Core/Database/Catalog/Catalog.module';
import { FurnitureModule } from '../Furniture/Furniture.module';
import { CatalogueService } from './Catalogue.service';

@Module({
    imports: [
        CatalogModule,
        FurnitureModule
    ],
    providers: [
        CatalogueService
    ],
    exports: [
        CatalogueService
    ]
})
export class CatalogueModule {}