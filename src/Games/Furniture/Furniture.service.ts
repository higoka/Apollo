import { Injectable, Logger } from "@nestjs/common";
import { ItemsService } from "src/Core/Database/Items/Items.service";
import { ItemsBaseEntity } from "src/Core/Database/Items/ItemsBase.entity";
import { FurnitureBaseDefs } from "./FurnitureBase.defs";

@Injectable()
export class FurnitureService {
    private readonly logger = new Logger(FurnitureService.name);
    public items: Map<number, FurnitureBaseDefs>;

    constructor(
        private readonly itemsService: ItemsService
    ) {
        this.items = new Map<number, FurnitureBaseDefs>();
        this.loadItems();
    }

    public async loadItems(): Promise<void> {
        this.items.clear();

        return this.itemsService.getItemsBase().then((items: ItemsBaseEntity[]) => {
            for (var item of items) {
                var id: number = item.id;

                if (!this.items.has(id)) {
                    this.items.set(id, new FurnitureBaseDefs(item));
                }
            }
        });
    }
}