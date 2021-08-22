import { forwardRef, Inject, Injectable, Logger } from "@nestjs/common";
import { UserLoggedInEvent } from "src/Core/Plugin/Events/UserLoggedIn.event";
import { PluginManager } from "src/Core/Plugin/Plugin.manager";

@Injectable()
export class PluginTestExecutor {
    private readonly logger = new Logger(PluginTestExecutor.name);

    constructor(
        @Inject(forwardRef(() => PluginManager))
        private readonly pluginManager: PluginManager
    ) {
        this.pluginManager.readEvent("user.logged.in", (event: UserLoggedInEvent) => {
            this.logger.log(event.habbo.getHabboData.getUsername + " is logged to client");
        })
        this.pluginManager.readEvent("apollo.shutdown.started", () => {
            this.logger.warn("Apollo in shutdown! Plugin stopped!");
        })
    }
}