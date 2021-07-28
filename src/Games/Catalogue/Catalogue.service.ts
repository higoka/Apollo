import { Injectable, Logger } from "@nestjs/common";
import { CatalogService } from "src/Core/Database/Catalog/Catalog.service";
import { CatalogPagesEntity } from "src/Core/Database/Catalog/CatalogPages.entity";
import { HabboDefs } from "../User/Habbo.defs";
import { CataloguePageDefs } from "./CataloguePage.defs";
import { CatalogRootLayout } from "./Layout/CatalogRoot.layout";

@Injectable()
export class CatalogueService {
    private readonly logger = new Logger(CatalogueService.name);
    public catalogPages: Map<number, CataloguePageDefs>;

    constructor(
        private readonly catalogService: CatalogService
    ) {
        this.catalogPages = new Map<number, CataloguePageDefs>();
        this.loadCatalogPages();
    }

    private async loadCatalogPages(): Promise<void> {
        this.catalogPages.clear();

        this.catalogService.getCatalogPages().then((pages: CatalogPagesEntity[]) => {
            pages.forEach((page: CatalogPagesEntity) => {
                this.catalogPages.set(page.id, new CataloguePageDefs(page)); 
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