import { Module } from '@nestjs/common';
import { DatabaseModule } from './Database/Database.module';
import { UserModule } from './Database/User/User.module';

@Module({
    imports: [
        UserModule,
        DatabaseModule
    ]
})
export class CoreModule {}