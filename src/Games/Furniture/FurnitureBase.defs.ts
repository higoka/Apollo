import { ItemsBaseEntity } from "src/Core/Database/Items/ItemsBase.entity";

export class FurnitureBaseDefs {
    public id: number;
    public spriteId: number;
    public name: string;
    public fullName: string;
    public type: string;
    public width: number;
    public length: number;
    public height: number;
    public allowStack: boolean;
    public allowWalk: boolean;
    public allowSit: boolean;
    public allowLay: boolean;
    public allowRecyle: boolean;
    public allowTrade: boolean;
    public allowMarketplace: boolean;
    public allowGift: boolean;
    public allowInventoryStack: boolean;
    public stateCount: number;
    public effectM: number;
    public effectF: number;
    public vendingItems: Array<number>;
    public multiHeights: Array<number>;
    public customParams: string;
    public clothingOnWalk: string;
    public interactionType: string; // TODO: Change type
    public rotations: number;

    constructor(data: ItemsBaseEntity) {
        this.id = data.id;
        this.spriteId = data.sprite_id;
        this.name = data.public_name;
        this.fullName = data.item_name;
        this.type = data.type;
        this.width = data.width;
        this.length = data.length;
        this.height = data.stack_height;
        this.allowStack = !!data.allow_stack;
        this.allowWalk = !!data.allow_walk;
        this.allowSit = !!data.allow_sit;
        this.allowLay = !!data.allow_lay;
        this.allowRecyle = !!data.allow_recycle;
        this.allowTrade = !!data.allow_trade;
        this.allowMarketplace = !!data.allow_marketplace_sell;
        this.allowGift = !!data.allow_gift;
        this.allowInventoryStack = !!data.allow_inventory_stack;
        this.stateCount = data.interaction_modes_count;
        this.effectM = data.effect_id_male;
        this.effectF = data.effect_id_female;

        /*if (!data.vending_ids == null) {
            var vendingIds: Array<string> = data.vending_ids.toString().replace(";", ",").split(",");
            vendingIds.forEach((value: string) => {
                this.vendingItems.push(parseInt(value.replace("", "")));
            });
        }

        if (data.multiheight.includes(";")) {
            var multihHeights: Array<string> = data.multiheight.toString().split(";");
           
            for (var i: number = 0; i < multihHeights.length; i++) {
                this.multiHeights.push(parseInt(multihHeights[i]));
            }
        }*/

        this.customParams = data.customparams;
        this.clothingOnWalk = data.clothing_on_walk;
        this.interactionType = data.interaction_type;
        this.rotations = 4;
    }
}