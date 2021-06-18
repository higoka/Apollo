import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('users_currency')
export class UserCurrencyEntity {
    @PrimaryColumn()
    user_id: number;

    @PrimaryColumn()
    type: number;

    @Column()
    amount: number;
}