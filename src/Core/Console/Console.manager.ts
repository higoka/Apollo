import { Injectable, Logger } from '@nestjs/common';
import * as rl from "readline";

@Injectable()
export class ConsoleManager {
    private readonly logger = new Logger(ConsoleManager.name);

    constructor() {
        const console: rl.Interface = rl.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.on('line', async (input: string) => {
            switch (input) {
                case 'shutdown':
                    this.logger.warn("Apollo is in shutdown!");
                    this.logger.log("Apollo is shutdowned with success");
                    process.exit();
                default:
                    this.logger.error(input + " is an unsoppported command!");
                break;
            }
        })
    }
}