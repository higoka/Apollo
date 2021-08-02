import { CatalogItemsEntity } from "src/Core/Database/Catalog/CatalogItems.entity";
import { OutPacket } from "src/Messages/Outgoing/Out.packet";
import { FurnitureService } from "../Furniture/Furniture.service";
import { FurnitureBaseDefs } from "../Furniture/FurnitureBase.defs";

export class CatalogueItemDefs {
    public id: number;
    public name: string;
    public itemId: string;
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
    public clubOnly: number;
    public haveOffer: boolean;
    private furnitureService: FurnitureService;

    constructor(furnitureService: FurnitureService) {
        this.furnitureService = furnitureService;
    }

    public initData(data: CatalogItemsEntity): this {
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
        this.clubOnly = data.club_only;
        this.haveOffer = !!data.have_offer;
        return this;
    }

    public serialize(out: OutPacket): void {
        out.writeInt(this.id);
        out.writeString(this.name);
        out.writeBoolean(false);
        out.writeInt(this.costCredits);
        out.writeInt(this.costPoints);
        out.writeInt(this.pointsType);
        out.writeBoolean(true);

        var items: Array<FurnitureBaseDefs> = this.getBaseItems();

        out.writeInt(items.length);

        items.forEach((item: FurnitureBaseDefs) => {
            out.writeString(item.type.toLowerCase());

            if (item.type == "B") {
                out.writeString(item.name);
            } else {
                out.writeInt(item.spriteId);
                if (this.name.includes("wallpaper_single") || this.name.includes("floor_single") || this.name.includes("landscape_single")) {
                    out.writeString(this.name.split("_")[2]);
                } else if (item.name.includes("bot") && item.type == "R") {
                    var lookFound: boolean = false;
                    this.extradata.split(";").forEach((value: string) => {
                        if (value.startsWith("figure:")) {
                            lookFound = true;
                            out.writeString(value.replace("figure:", ""));
                            return;
                        }
                    });

                    if (!lookFound) {
                        out.writeString(this.extradata);
                    }

                    else if (item.type == "R") {
                        out.writeString(this.extradata);
                    } else if (this.name.startsWith("SONG ")) {
                        out.writeString(this.extradata);
                    } else {
                        out.writeString("");
                    }

                    out.writeInt(this.amount);
                    out.writeBoolean(this.limitedStack > 0);

                    if (this.limitedStack > 0) {
                        out.writeInt(this.limitedStack);
                        out.writeInt(this.limitedStack - this.limitedSells);
                    }
                }
            }
        });

        out.writeInt(this.clubOnly);
        out.writeBoolean(true);
        out.writeBoolean(false);
        out.writeString(this.name + ".png");
    }

    public getBaseItems(): Array<FurnitureBaseDefs> {
        var items: Array<FurnitureBaseDefs> = new Array<FurnitureBaseDefs>();

        if (!this.itemId != null) {
            var itemIds: Array<string> = this.itemId.split(";");

            for (var itemId of itemIds) {
                if (itemId == null) {
                    return;
                }

                if (itemId.includes(":")) {
                    itemId = itemId.split(":")[0];
                }

                var identifier: number = parseInt(itemId);

                if (identifier > 0) {
                    var item: FurnitureBaseDefs = this.furnitureService.items.get(identifier);

                    if (item != null) {
                        items.push(item);
                    }
                }
            }
        }

        return items;
    }
}