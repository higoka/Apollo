import { Injectable, Logger } from "@nestjs/common";
import { CatalogService } from "src/Core/Database/Catalog/Catalog.service";
import { CatalogItemsEntity } from "src/Core/Database/Catalog/CatalogItems.entity";
import { CatalogPagesEntity } from "src/Core/Database/Catalog/CatalogPages.entity";
import { FurnitureService } from "../Furniture/Furniture.service";
import { HabboDefs } from "../User/Habbo.defs";
import { CatalogueItemDefs } from "./CatalogueItem.defs";
import { CataloguePageDefs } from "./CataloguePage.defs";
import { CataloguePageLayoutsDefs } from "./CataloguePageLayouts.defs";
import { CatalogRootLayout } from "./Layout/CatalogRoot.layout";
import { Default3x3Layout } from "./Layout/Default3x3.layout";

@Injectable()
export class CatalogueService {
    private readonly logger = new Logger(CatalogueService.name);
    public catalogPages: Map<number, CataloguePageDefs>;
    private pageLayout: Map<string, CataloguePageDefs>;

    constructor(
        private readonly catalogService: CatalogService,
        private readonly furnitureService: FurnitureService
    ) {
        this.catalogPages = new Map<number, CataloguePageDefs>();
        this.pageLayout = new Map<string, CataloguePageDefs>();
        this.loadCatalogPages();
        this.loadCatalogItems();
    }

    public loadPageDefinitions(data: CatalogPagesEntity) {
        for (var layout in CataloguePageLayoutsDefs) {
            switch (layout) {
                case "default_3x3":
                    this.pageLayout.set("default_3x3", new Default3x3Layout(data));
                break;
            }
        }
    }

    private async loadCatalogPages(): Promise<void> {
        this.catalogPages.clear();

        this.catalogPages.set(-1, new CatalogRootLayout());
        this.catalogService.getCatalogPages().then((pages: CatalogPagesEntity[]) => {
            pages.forEach((page: CatalogPagesEntity) => {
                this.loadPageDefinitions(page);
                this.catalogPages.set(page.id, new CataloguePageDefs().initData(page)); 
            });
            this.catalogPages.forEach((object: CataloguePageDefs) => {
                var page: CataloguePageDefs = this.catalogPages.get(object.parentId);
                if (page != null) {
                    if (page.id != object.id) {
                        page.addChildPage(object);
                    }
                }
            });

            this.logger.log("Loaded " + this.catalogPages.size + " catalog pages!");
        });
    }

    public async loadCatalogItems(): Promise<void> {
        var catalogItemAmount: number = 0;

        this.catalogService.getCatalogItems().then((items: CatalogItemsEntity[]) => {
            items.forEach((item: CatalogItemsEntity) => {
                /*if (item.item_ids != 0) {
                    return;
                }

                if (item.catalog_name.startsWith("HABBO_CLUB_")) {
                    // TODO: add club items
                }*/

                var page: CataloguePageDefs = this.catalogPages.get(item.page_id);

                if (page == null) {
                    return;
                }

                var itemData: CatalogueItemDefs = page.pagesItems.get(item.id);

                if (itemData == null) {
                    catalogItemAmount++;
                    itemData = new CatalogueItemDefs(this.furnitureService).initData(item);
                    page.addItem(itemData);
                }
            });
        });
    }

    public getCatalogPages(parentId: number, habbo: HabboDefs): Array<CataloguePageDefs> {
        var pages: Array<CataloguePageDefs> = new Array<CataloguePageDefs>();

        this.catalogPages.get(parentId).childPages.forEach((value: CataloguePageDefs) => {
            var isVisible: boolean = value.visible;
            var visibleRank: boolean = value.rank <= habbo.habboInfo.rankId;
            var clubOnly: boolean = true;

            if (value.clubOnly) {
                //clubOnly = false;
            }

            if (isVisible && visibleRank && clubOnly) {
                pages.push(value);
            }
        });

        return pages;
    }
}