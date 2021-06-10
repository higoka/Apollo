import { createConnection } from 'typeorm';
import { User } from './User/User.entity';

export const DatabaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: 'cosimo',
            database: 'cosmic',
            entities: [
                User
            ],
            synchronize: false,
        }),
    }
];
