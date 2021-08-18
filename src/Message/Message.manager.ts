import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { ApolloManager } from 'src/Apollo.manager';

@Injectable()
export class MessageManager {
    private readonly logger = new Logger(MessageManager.name);

    constructor(
        @Inject(forwardRef(() => ApolloManager))
        private readonly apolloManager: ApolloManager
    ) {

    }
}