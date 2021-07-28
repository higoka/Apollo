import { Module } from '@nestjs/common';
import { CatalogModule } from 'src/Core/Database/Catalog/Catalog.module';
import { CatalogueService } from './Catalogue.service';

@Module({
    imports: [
        CatalogModule
    ],
    providers: [
        CatalogueService
    ],
    exports: [
        CatalogueService
    ]
})
export class CatalogueModule {}