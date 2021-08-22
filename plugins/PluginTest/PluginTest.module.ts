import { forwardRef, Module } from '@nestjs/common';
import { PluginModule } from 'src/Core/Plugin/Plugin.module';
import { PluginTestExecutor } from './PluginTest.executor';

@Module({
    imports: [
        forwardRef(() => PluginModule)
    ],
    providers: [
        PluginTestExecutor
    ],
    exports: [
        PluginTestExecutor
    ]
})
export class PluginTestModule {}