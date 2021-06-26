import { Module } from '@nestjs/common';
import { NavigatorModule } from 'src/Core/Database/Navigator/Navigator.module';

@Module({
    imports: [
        NavigatorModule
    ]
})
export class NavigationModule {}