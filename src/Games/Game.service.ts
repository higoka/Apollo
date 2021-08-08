import { Injectable } from "@nestjs/common";
import { CatalogueService } from "./Catalogue/Catalogue.service";
import { NavigationService } from "./Navigation/Navigation.service";
import { HabboService } from "./User/Habbo.service";

@Injectable()
export class GameService {
    constructor(
        private readonly catalogueService: CatalogueService,
        private readonly habboService: HabboService,
        private readonly navigationService: NavigationService
    ) {

    }

    public get CatalogueService(): CatalogueService {
        return this.catalogueService;
    }

    public get HabboService(): HabboService {
        return this.habboService;
    }

    public get NavigatorService(): NavigationService {
        return this.navigationService;
    }
}