import { CatalogueService } from "src/Games/Catalogue/Catalogue.service";
import { CatalogModeComposer } from "src/Messages/Outgoing/Catalog/CatalogModeComposer";
import { CatalogPagesListComposer } from "src/Messages/Outgoing/Catalog/CatalogPagesListComposer";
import { MessageHandler } from "../message.handler";

export class RequestCatalogModeEvent extends MessageHandler {
    private catalogueService: CatalogueService;

    constructor(catalogueService: CatalogueService) {
        super();

        this.catalogueService = catalogueService;
    }

    public handle(): void {
        var mode: string = this.entryPacket.readString();
        if (mode == "normal") {
            this.gameClient.send(new CatalogModeComposer(0).compose());
            this.gameClient.send(new CatalogPagesListComposer(this.gameClient.habbo, mode, this.catalogueService).compose());
        } else {
            this.gameClient.send(new CatalogModeComposer(1).compose());
            this.gameClient.send(new CatalogPagesListComposer(this.gameClient.habbo, mode, this.catalogueService).compose());
        }
    }
}