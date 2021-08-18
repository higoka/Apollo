import { forwardRef, Module } from '@nestjs/common';
import { ApolloModule } from 'src/Apollo.module';
import { DatabaseManager } from "./Database.manager";
import { UserModule } from './User/User.module';

@Module({
    imports: [
        forwardRef(() => ApolloModule),
        forwardRef(() => UserModule)
    ],
    providers: [
        DatabaseManager
    ],
    exports: [
        DatabaseManager
    ]
})
export class DatabaseModule {}