import { forwardRef, Module } from '@nestjs/common';
import { ApolloModule } from 'src/Apollo.module';
import { ConsoleManager } from './Console.manager';

@Module({
    imports: [
        forwardRef(() => ApolloModule)
    ],
    providers: [
        ConsoleManager
    ],
    exports: [
        ConsoleManager
    ]
})
export class ConsoleModule {}