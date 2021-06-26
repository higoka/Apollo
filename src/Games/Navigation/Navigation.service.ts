import { Injectable, Logger } from '@nestjs/common';
import { NavigatorService } from 'src/Core/Database/Navigator/Navigator.service';

@Injectable()
export class NavigationService {
    private readonly logger = new Logger(NavigationService.name);
    public publicCategories: Map<number, any>;

    constructor(
        private readonly navigatorService: NavigatorService
    ) {

    }

    public loadNavigator(): Promise<void> {
        return;
    }
}