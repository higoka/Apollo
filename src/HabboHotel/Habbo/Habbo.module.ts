import { forwardRef, Module } from '@nestjs/common';
import { ApolloModule } from 'src/Apollo.module';
import { HabboManager } from './Habbo.manager';

@Module({
    imports: [
        forwardRef(() => ApolloModule)
    ],
    providers: [
        HabboManager
    ],
    exports: [
        HabboManager
    ]
})
export class HabboModule {}