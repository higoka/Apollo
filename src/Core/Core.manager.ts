import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ConfigurationManager } from './Configuration/Configuration.manager';
import { ConsoleManager } from './Console/Console.manager';
import { DatabaseManager } from './Database/Database.manager';
import { PluginManager } from './Plugin/Plugin.manager';

@Injectable()
export class CoreManager {
    constructor(
        private readonly configurationManager: ConfigurationManager,
        private readonly consoleManager: ConsoleManager,
        private readonly databaseManager: DatabaseManager,
        private readonly pluginManager: PluginManager
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

    public get PluginManager(): PluginManager {
        return this.pluginManager;
    }
}