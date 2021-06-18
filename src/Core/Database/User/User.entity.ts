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
    credits: number;

    @Column()
    pixels: number;
    
    @Column()
    points: number;
    
    @Column()
    auth_ticket: string;
    
    @Column()
    home_room: number;

    @Column()
    online: number;
    
    @Column()
    ip_register: string;
    
    @Column()
    ip_current: string;

    @Column()
    account_created: string;

    @Column()
    last_online: string;
}