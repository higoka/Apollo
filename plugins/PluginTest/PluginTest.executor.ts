import { forwardRef, Inject, Injectable, Logger } from "@nestjs/common";
import { ApolloManager } from "src/Apollo.manager";
import { UserLoggedInEvent } from "src/Core/Plugin/Events/UserLoggedIn.event";

@Injectable()
export class PluginTestExecutor {
    private readonly logger = new Logger(PluginTestExecutor.name);

    constructor(
        @Inject(forwardRef(() => ApolloManager))
        private readonly apolloManager: ApolloManager
    ) {
        
    }
}