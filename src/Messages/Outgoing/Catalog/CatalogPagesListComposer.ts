import { CatalogueService } from "src/Games/Catalogue/Catalogue.service";
import { CataloguePageDefs } from "src/Games/Catalogue/CataloguePage.defs";
import { HabboDefs } from "src/Games/User/Habbo.defs";
import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class CatalogPagesListComposer extends MessageComposer {
    private habbo: HabboDefs;
    private mode: string;
    private catalogueService: CatalogueService;

    constructor(habbo: HabboDefs, mode: string, catalogueService: CatalogueService) {
        super();

        this.habbo = habbo;
        this.mode = mode;
        this.catalogueService = catalogueService;
    }

    protected composeInternal(): OutPacket {
        var pages: Array<CataloguePageDefs> = this.catalogueService.getCatalogPages(-1, this.habbo);

        this.response.init(OutgoingList.CATALOG_PAGES);

        this.response.writeBoolean(true);
        this.response.writeInt(0);
        this.response.writeInt(-1);
        this.response.writeString("root");
        this.response.writeString("");
        this.response.writeInt(0);
        this.response.writeInt(pages.length);

        for (var pageData of pages) {
            this.append(pageData);
        }

        this.response.writeBoolean(false);
        this.response.writeString(this.mode);

        return this.response;
    }

    private append(page: CataloguePageDefs): void {
        var pages: Array<CataloguePageDefs> = this.catalogueService.getCatalogPages(page.id, this.habbo);
        this.response.writeBoolean(page.visible);
        this.response.writeInt(page.iconImage);
        this.response.writeInt(page.enabled ? page.id : -1);
        this.response.writeString(page.pageName);
        this.response.writeString(page.caption + (true ? " (" + page.id + ")" : ""));
        this.response.writeInt(0);

        this.response.writeInt(pages.length);

        for (var pageData of pages) {
            this.append(pageData);
        }
    }
}