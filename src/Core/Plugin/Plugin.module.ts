import { forwardRef, Module } from '@nestjs/common';
import { ApolloModule } from 'src/Apollo.module';
import { PluginManager } from './Plugin.manager';

@Module({
    imports: [
        forwardRef(() => ApolloModule)
    ],
    providers: [
        PluginManager
    ],
    exports: [
        PluginManager
   ]
})
export class PluginModule {}