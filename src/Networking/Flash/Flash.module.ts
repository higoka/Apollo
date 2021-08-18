import { forwardRef, Module } from '@nestjs/common';
import { ApolloModule } from 'src/Apollo.module';
import { FlashManager } from './Flash.manager';

@Module({
    imports: [
        forwardRef(() => ApolloModule)
    ],
    providers: [
        FlashManager
    ],
    exports: [
        FlashManager
    ]
})
export class FlashModule {}