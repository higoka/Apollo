import { Module } from '@nestjs/common';
import { ConsoleManager } from './Console.manager';

@Module({
    imports: [
        
    ],
    providers: [
        ConsoleManager
    ],
    exports: [
        ConsoleManager
    ]
})
export class ConsoleModule {}