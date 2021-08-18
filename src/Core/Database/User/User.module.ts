import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../Database.module';
import { UserManager } from './User.manager';
import { UserProvider } from './User.provider';

@Module({
    imports: [
        forwardRef(() => DatabaseModule)
    ],
    providers: [
        UserProvider,
        UserManager
    ],
    exports: [
        UserManager
    ]
})
export class UserModule {}