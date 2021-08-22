import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PluginTestModule } from 'plugins/PluginTest/PluginTest.module';
import { PluginManager } from './Plugin.manager';

@Module({
    imports: [
        EventEmitterModule.forRoot(),
        PluginTestModule
    ],
    providers: [
        PluginManager
    ],
    exports: [
        PluginManager
   ]
})
export class PluginModule {}