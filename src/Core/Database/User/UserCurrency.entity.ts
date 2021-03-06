import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('users_currencies')
export class UserCurrencyEntity {
    @PrimaryColumn()
    user_id: number;

    @PrimaryColumn()
    currency_name: string;

    @Column()
    amount: number;
}