import { CatalogueService } from "src/Games/Catalogue/Catalogue.service";
import { CataloguePageDefs } from "src/Games/Catalogue/CataloguePage.defs";
import { CatalogPageComposer } from "src/Messages/Outgoing/Catalog/CatalogPageComposer";
import { MessageHandler } from "../message.handler";

export class RequestCatalogPageEvent extends MessageHandler {
    private catalogueService: CatalogueService;

    constructor(catalogueService: CatalogueService) {
        super();

        this.catalogueService = catalogueService;
    }

    public handle(): void {
        var catalogPageId: number = this.entryPacket.readInt();
        var unknown: number = this.entryPacket.readInt();
        var mode: string = this.entryPacket.readString();

        var page: CataloguePageDefs = this.catalogueService.catalogPages.get(catalogPageId);

        if (catalogPageId > 0 && page != null) {
            if (page.rank <= this.gameClient.habbo.habboInfo.rank.level && page.enabled) {
                this.gameClient.send(new CatalogPageComposer(page, this.gameClient.habbo, mode).compose());
            }
        }
    }
}