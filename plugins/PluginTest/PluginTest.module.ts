import { forwardRef, Module } from '@nestjs/common';
import { ApolloModule } from 'src/Apollo.module';
import { PluginTestExecutor } from './PluginTest.executor';

@Module({
    imports: [
        forwardRef(() => ApolloModule)
    ],
    providers: [
        PluginTestExecutor
    ],
    exports: [
        PluginTestExecutor
    ]
})
export class PluginTestModule {}