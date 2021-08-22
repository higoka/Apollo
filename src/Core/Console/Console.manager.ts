import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import * as rl from "readline";
import { ApolloManager } from 'src/Apollo.manager';
import { DelayUtils } from 'src/Utils/DelayUtils';

@Injectable()
export class ConsoleManager {
    private readonly logger = new Logger(ConsoleManager.name);

    constructor(
        @Inject(forwardRef(() => ApolloManager))
        private readonly apolloManager: ApolloManager
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
                    this.apolloManager.EventEmitter.emit('apollo.shutdown.started');
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