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

        this.response.writeString(this.page.layout);
        this.response.writeInt(3);
        this.response.writeString(this.page.headerImage);
        this.response.writeString(this.page.teaserImage);
        this.response.writeString(this.page.specialImage);
        this.response.writeInt(3);
        this.response.writeString(this.page.textOne);
        this.response.writeString(this.page.textDetails);
        this.response.writeString(this.page.textTeaser);

        this.response.writeInt(this.page.pagesItems.size);

        for (var item of this.page.pagesItems.values()) {
            item.serialize(this.response);
        }

        this.response.writeInt(0);
        this.response.writeBoolean(false);

        return this.response;
    }
}