import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ConfigurationManager } from './Configuration/Configuration.manager';
import { ConsoleManager } from './Console/Console.manager';
import { DatabaseManager } from './Database/Database.manager';

@Injectable()
export class CoreManager {
    constructor(
        private readonly configurationManager: ConfigurationManager,
        private readonly consoleManager: ConsoleManager,
        private readonly databaseManager: DatabaseManager
    ) {

    }

    public get DatabaseManager(): DatabaseManager {
        return this.databaseManager;
    }

    public get ConfigurationManager(): ConfigurationManager {
        return this.configurationManager;
    }

    public get ConsoleManager(): ConsoleManager {
        return this.consoleManager;
    }
}