import { Connection } from "typeorm";
import { DatabaseModule } from "../Database.module";
import { User } from "./User.entity";

export const UserProvider = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: ['DATABASE_CONNECTION'],
    }
]