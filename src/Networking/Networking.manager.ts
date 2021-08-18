import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { FlashManager } from './Flash/Flash.manager';
import { NitroManager } from './Nitro/Nitro.manager';

@Injectable()
export class NetworkingManager {
    constructor(
        @Inject(forwardRef(() => NitroManager))
        private readonly nitroManager: NitroManager,
        @Inject(forwardRef(() => FlashManager))
        private readonly flashManager: FlashManager
    ) {

    }

    public get NitroManager(): NitroManager {
        return this.nitroManager;
    }

    public get FlashManager(): FlashManager {
        return this.flashManager;
    }
}