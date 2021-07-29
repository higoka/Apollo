import { CatalogPagesEntity } from "src/Core/Database/Catalog/CatalogPages.entity";
import { OutPacket } from "src/Messages/Outgoing/Out.packet";
import { CataloguePageDefs } from "../CataloguePage.defs";

export class Default3x3Layout extends CataloguePageDefs {
    constructor(data: CatalogPagesEntity) {
        super();

        super.initData(data);
    }

    public serialize(out: OutPacket): void {
        out.writeString("default_3x3");
        out.writeInt(3);
        out.writeString(super.headerImage);
        out.writeString(super.teaserImage);
        out.writeString(super.specialImage);
        out.writeInt(3);
        out.writeString(super.textOne);
        out.writeString(super.textDetails);
        out.writeString(super.textTeaser);
    }
}