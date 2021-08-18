import { forwardRef, Module } from '@nestjs/common';
import { ApolloModule } from 'src/Apollo.module';
import { MessageManager } from './Message.manager';

@Module({
    imports: [
        forwardRef(() => ApolloModule)
    ],
    providers: [
        MessageManager
    ],
    exports: [
        MessageManager
    ]
})
export class MessageModule {}