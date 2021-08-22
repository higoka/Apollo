import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PluginEventInterface } from './PluginEvent.interface';

@Injectable()
export class PluginManager {
    private readonly logger = new Logger(PluginManager.name);

    constructor(
        public readonly eventEmitter: EventEmitter2
    ) {
        
    }

    public readEvent(event: string, callback: (event: PluginEventInterface) => void): void {
        this.eventEmitter.on(event, callback);
    }
}