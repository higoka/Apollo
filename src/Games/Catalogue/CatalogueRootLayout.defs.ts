import { CataloguePageDefs } from "./CataloguePage.defs";

export class CatalogueRootLayoutDefs extends CataloguePageDefs {
    constructor() {
        super();

        this.id = -1;
        this.parentId = -2;
        this.rank = 0;
        this.caption = "root";
        this.pageName = "root";
        this.iconColor = 0;
        this.iconImage = 0;
        this.orderNum = -10;
        this.visible = true;
        this.enabled = true;
    }
}