import { CatalogItemsEntity } from "src/Core/Database/Catalog/CatalogItems.entity";

export class CatalogueItemDefs {
    public id: number;
    public name: string;
    public itemId: number;
    public pageId: number;
    public costCredits: number;
    public costPoints: number;
    public pointsType: number;
    public amount: number;
    public limitedStack: number;
    public limitedSells: number;
    public orderNum: number;
    public offerId: number;
    public songId: number;
    public extradata: string;
    public clubOnly: boolean;
    public haveOffer: boolean;

    constructor(data: CatalogItemsEntity) {
        this.id = data.id;
        this.name = data.catalog_name;
        this.itemId = data.item_ids;
        this.pageId = data.page_id;
        this.costCredits = data.cost_credits;
        this.costPoints = data.cost_points;
        this.pointsType = data.points_type;
        this.amount = data.amount;
        this.limitedStack = data.limited_stack;
        this.limitedSells = data.limited_sells;
        this.orderNum = data.order_number;
        this.offerId = data.offer_id;
        this.songId = data.song_id;
        this.extradata = data.extradata;
        this.clubOnly = !!data.club_only;
        this.haveOffer = !!data.have_offer;
    }
}