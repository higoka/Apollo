import { Injectable, Logger } from '@nestjs/common';
import * as rl from "readline";
import { FlashManager } from 'src/Networking/Flash/Flash.manager';
import { NitroManager } from 'src/Networking/Nitro/Nitro.manager';
import { DelayUtils } from 'src/Utils/DelayUtils';
import { PluginManager } from '../Plugin/Plugin.manager';

@Injectable()
export class ConsoleManager {
    private readonly logger = new Logger(ConsoleManager.name);

    constructor(
        private readonly pluginManager: PluginManager,
        private readonly nitroManager: NitroManager,
        private readonly flashManager: FlashManager
    ) {
        const console: rl.Interface = rl.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.on('line', async (input: string) => {
            switch (input) {
                case 'shutdown':
                case 'stop':
                    this.logger.warn("Apollo is in shutdown!");
                    this.pluginManager.eventEmitter.emit('apollo.shutdown.started');
                    this.nitroManager.destroy();
                    this.flashManager.destroy();
                    await DelayUtils.sleep(3000);
                    this.logger.log("Apollo is shutdowned with success");
                    await DelayUtils.sleep(5000);
                    process.exit();
                default:
                    this.logger.error(input + " is an unsoppported command!");
                break;
            }
        })
    }
}