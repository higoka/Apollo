import { forwardRef, Module } from '@nestjs/common';
import { PluginTestModule } from 'plugins/PluginTest/PluginTest.module';
import { ApolloModule } from 'src/Apollo.module';
import { PluginManager } from './Plugin.manager';

@Module({
    imports: [
        forwardRef(() => ApolloModule),
        PluginTestModule.import()
    ],
    providers: [
        PluginManager
    ],
    exports: [
        PluginManager
   ]
})
export class PluginModule {}