import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { ApolloManager } from 'src/Apollo.manager';
import { PluginEventInterface } from './PluginEvent.interface';

@Injectable()
export class PluginManager {
    private readonly logger = new Logger(PluginManager.name);

    constructor(
        @Inject(forwardRef(() => ApolloManager))
        private readonly apolloManager: ApolloManager
    ) {
        
    }

    public readEvent(event: string, callback: (event: PluginEventInterface) => void): void {
        this.apolloManager.EventEmitter.on(event, callback);
    }
}