import { forwardRef, DynamicModule, Module } from '@nestjs/common';
import { ApolloModule } from 'src/Apollo.module';
import { PluginTestExecutor } from './PluginTest.executor';

@Module({
    imports: [
        forwardRef(() => ApolloModule)
    ]
})
export class PluginTestModule {
    static import(): DynamicModule {
        return {
            module: PluginTestModule,
            providers: [
                PluginTestExecutor
            ],
            exports: [
                PluginTestExecutor
            ],
        };
    }
}