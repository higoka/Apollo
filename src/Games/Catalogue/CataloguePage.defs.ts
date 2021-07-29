import { CatalogPagesEntity } from "src/Core/Database/Catalog/CatalogPages.entity";
import { CatalogueItemDefs } from "./CatalogueItem.defs";

export class CataloguePageDefs {
    public childPages: Map<number, this> = new Map<number, this>();
    public pagesItems: Map<number, CatalogueItemDefs> = new Map<number, CatalogueItemDefs>();
    public id: number;
    public parentId: number;
    public rank: number;
    public caption: string;
    public pageName: string;
    public iconColor: number;
    public iconImage: number;
    public orderNum: number;
    public visible: boolean;
    public enabled: boolean;
    public clubOnly: boolean;
    public layout: string;
    public headerImage: string;
    public teaserImage: string;
    public specialImage: string;
    public textOne: string;
    public textTwo: string;
    public textDetails: string;
    public textTeaser: string;

    public initData(data: CatalogPagesEntity): this {
        this.id = data.id;
        this.parentId = data.parent_id;
        this.rank = data.min_rank;
        this.caption = data.caption;
        this.pageName = data.caption_save;
        this.iconColor = data.icon_color;
        this.iconImage = data.icon_image;
        this.orderNum = data.order_num;
        this.visible = !!data.visible;
        this.enabled = !!data.enabled;
        this.clubOnly = !!data.club_only;
        this.layout = data.page_layout;
        this.headerImage = data.page_headline;
        this.teaserImage = data.page_teaser;
        this.specialImage = data.page_special;
        this.textOne = data.page_text1;
        this.textTwo = data.page_text2;
        this.textDetails = data.page_text_details;
        this.textTeaser = data.page_text_teaser;
        return this;
    }

    public addItem(item: CatalogueItemDefs): void {
        this.pagesItems.set(item.id, item);
    }

    public addChildPage(pages: this): void {
        this.childPages.set(pages.id, pages);
    }

    public get allChildPages(): Map<number, this> {
        return this.childPages;
    }
}