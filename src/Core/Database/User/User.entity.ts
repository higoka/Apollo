import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('users')
export class UserEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    motto: string;

    @Column()
    rank: number;

    @Column()
    look: string;

    @Column()
    gender: string;
    
    @Column()
    auth_ticket: string;
    
    @Column()
    home_room: number;

    @Column()
    online: string;
    
    @Column()
    register_ip: string;
    
    @Column()
    current_ip: string;

    @Column()
    account_created: number;

    @Column()
    last_online: number;
}