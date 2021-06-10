import { NestFactory } from '@nestjs/core';
import { ApolloModule } from './Apollo.module';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(ApolloModule);
}
bootstrap();