import { CatalogueService } from "src/Games/Catalogue/Catalogue.service";
import { CatalogueItemDefs } from "src/Games/Catalogue/CatalogueItem.defs";
import { CataloguePageDefs } from "src/Games/Catalogue/CataloguePage.defs";
import { HabboDefs } from "src/Games/User/Habbo.defs";
import { MessageComposer } from "../Message.composer";
import { OutPacket } from "../Out.packet";
import { OutgoingList } from "../Outgoing.list";

export class CatalogPageComposer extends MessageComposer {
    private page: CataloguePageDefs;
    private habbo: HabboDefs;
    private mode: string;

    constructor(page: CataloguePageDefs, habbo: HabboDefs, mode: string) {
        super();

        this.page = page;
        this.habbo = habbo;
        this.mode = mode;
    }

    protected composeInternal(): OutPacket {
        this.response.init(OutgoingList.CATALOG_PAGE);

        this.response.writeInt(this.page.id);
        this.response.writeString(this.mode);

        this.response.writeInt(this.page.pagesItems.size);
        this.page.pagesItems.forEach((item: CatalogueItemDefs) => {
            item.serialize(this.response);
        });

        this.response.writeInt(0);
        this.response.writeBoolean(false);

        return this.response;
    }
}