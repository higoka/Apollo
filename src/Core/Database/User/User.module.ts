import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database.module';
import { UserProvider } from './User.provider';
import { UserService } from './User.service';

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        UserProvider,
        UserService
    ],
    exports: [
        UserService
    ]
})
export class UserModule {}