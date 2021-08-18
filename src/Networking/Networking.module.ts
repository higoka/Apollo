import { forwardRef, Module } from '@nestjs/common';
import { ApolloModule } from 'src/Apollo.module';
import { NetworkingManager } from './Networking.manager';
import { NitroModule } from './Nitro/Nitro.module';
import { FlashModule } from './Flash/Flash.module';

@Module({
    imports: [
        forwardRef(() => ApolloModule),
        forwardRef(() => NitroModule),
        forwardRef(() => FlashModule)
    ],
    providers: [
        NetworkingManager
    ],
    exports: [
        NetworkingManager
    ]
})
export class NetworkingModule {}