import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('users_info')
export class UserInfoEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    username: string;

    @Column()
    auth_ticket: string;

    @Column()
    rank: number;

    @Column()
    motto: string;

    @Column()
    look: string;

    @Column()
    gender: string;

    @Column()
    account_created: number;

    @Column()
    last_online: number;

    @Column()
    online: number;
}