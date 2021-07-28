import { Injectable } from "@nestjs/common";
import { CatalogueService } from "./Catalogue/Catalogue.service";
import { HabboService } from "./User/Habbo.service";

@Injectable()
export class GameService {
    constructor(
        private catalogueService: CatalogueService,
        private habboService: HabboService
    ) {

    }

    public get catalogueServices(): CatalogueService {
        return this.catalogueService;
    }

    public get habboServices(): HabboService {
        return this.habboService;
    }
}