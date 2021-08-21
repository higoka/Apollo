import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { UserInfoEntity } from "./UserInfo.entity";
import { UserSettingsEntity } from "./UserSettngs.entity";

@Entity('users')
export class UserEntity {
    @PrimaryColumn()
    id: number;
    
    @Column()
    register_ip: string;
    
    @Column()
    current_ip: string;

    @OneToOne(type => UserInfoEntity)
    @JoinColumn({ name: "id", referencedColumnName: "user_id" })
    user_info: UserInfoEntity;

    @OneToOne(type => UserSettingsEntity)
    @JoinColumn({ name: "id", referencedColumnName: "user_id" })
    user_settings: UserSettingsEntity;
}