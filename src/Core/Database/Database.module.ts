import { Module } from '@nestjs/common';
import { DatabaseProviders } from './Database.provider';

@Module({
    providers: [...DatabaseProviders],
    exports: [...DatabaseProviders],
})
export class DatabaseModule {}