import { Injectable, Logger } from '@nestjs/common';
import * as rl from "readline";
import { GameclientService } from 'src/Games/GameClient/Gameclient.service';
import { FlashNetworkingService } from 'src/Networking/Flash/FlashNetworking.service';
import { NitroNetworkingService } from 'src/Networking/Nitro/NitroNetworking.service';
import { DelayUtils } from 'src/Utils/DelayUtils';

@Injectable()
export class ConsoleProvider {
    private readonly logger = new Logger("ApolloService");

    constructor(
        private readonly nitroNetworkingService: NitroNetworkingService,
        private readonly flashNetworkingService: FlashNetworkingService,
        private readonly gameclientService: GameclientService
    ) {
        const console: rl.Interface = rl.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.on('line', async (input: string) => {
            switch (input) {
                case 'shutdown':
                    this.logger.warn("Apollo is in shutdown!");
                    await DelayUtils.sleep(5000);
                    this.nitroNetworkingService.destroy();
                    this.flashNetworkingService.destroy();
                    this.gameclientService.destroyAll();
                    this.logger.log("Apollo is shutdowned with success");
                    await DelayUtils.sleep(5000);
                    process.exit();
                break;
            }
        })
    }
}