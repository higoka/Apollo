import { Injectable, Logger } from "@nestjs/common";
import { CatalogService } from "src/Core/Database/Catalog/Catalog.service";
import { CatalogItemsEntity } from "src/Core/Database/Catalog/CatalogItems.entity";
import { CatalogPagesEntity } from "src/Core/Database/Catalog/CatalogPages.entity";
import { FurnitureService } from "../Furniture/Furniture.service";
import { HabboDefs } from "../User/Habbo.defs";
import { CatalogueItemDefs } from "./CatalogueItem.defs";
import { CataloguePageDefs } from "./CataloguePage.defs";
import { CatalogueRootLayoutDefs } from "./CatalogueRootLayout.Defs";

@Injectable()
export class CatalogueService {
    private readonly logger = new Logger(CatalogueService.name);
    public catalogPages: Map<number, CataloguePageDefs>;

    constructor(
        private readonly catalogService: CatalogService,
        private readonly furnitureService: FurnitureService
    ) {
        this.catalogPages = new Map<number, CataloguePageDefs>();
        this.loadCatalogPages();
        this.loadCatalogItems();
    }

    private async loadCatalogPages(): Promise<void> {
        this.catalogPages.clear();

        this.catalogPages.set(-1, new CatalogueRootLayoutDefs());
        return this.catalogService.getCatalogPages().then((pages: CatalogPagesEntity[]) => {
            for (var page of pages) {
                this.catalogPages.set(page.id, new CataloguePageDefs().initData(page)); 
            }
            for (var object of this.catalogPages.values()) {
                var pageClass: CataloguePageDefs = this.catalogPages.get(object.parentId);
                if (pageClass != null) {
                    if (pageClass.id != object.id) {
                        pageClass.addChildPage(object);
                    }
                }
            };

            this.logger.log("Loaded " + this.catalogPages.size + " catalog pages!");
        });
    }

    public async loadCatalogItems(): Promise<void> {
        var catalogItemAmount: number = 0;

        return this.catalogService.getCatalogItems().then((items: CatalogItemsEntity[]) => {
            for (var item of items) {
                var page: CataloguePageDefs = this.catalogPages.get(item.page_id);

                if (page == null) {
                    continue;
                }

                var itemData: CatalogueItemDefs = page.pagesItems.get(item.id);

                if (itemData == null) {
                    catalogItemAmount++;
                    itemData = new CatalogueItemDefs(this.furnitureService).initData(item);
                    page.addItem(itemData);
                }
            }
        });
    }

    public getCatalogPages(parentId: number, habbo: HabboDefs): Array<CataloguePageDefs> {
        var pages: Array<CataloguePageDefs> = new Array<CataloguePageDefs>();

        for (var value of this.catalogPages.get(parentId).childPages.values()) {
            var isVisible: boolean = value.visible;
            var visibleRank: boolean = value.rank <= habbo.habboInfo.rank.level;
            var clubOnly: boolean = true;

            if (value.clubOnly) {
                //clubOnly = false;
            }

            if (isVisible && visibleRank && clubOnly) {
                pages.push(value);
            }
        }

        return pages;
    }
}