import { forwardRef, Module } from '@nestjs/common';
import { ApolloModule } from 'src/Apollo.module';
import { NitroManager } from './Nitro.manager';

@Module({
    imports: [
        forwardRef(() => ApolloModule)
    ],
    providers: [
        NitroManager
    ],
    exports: [
        NitroManager
    ]
})
export class NitroModule {}