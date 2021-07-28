import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database.module';
import { CatalogProvider } from './Catalog.provider';
import { CatalogService } from './Catalog.service';

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        CatalogProvider,
        CatalogService
    ],
    exports: [
        CatalogService
    ]
})
export class CatalogModule {}