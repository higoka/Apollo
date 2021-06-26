import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('navigator_filter')
export class NavigatorFilterEntity {
    @PrimaryColumn()
    key: string;

    @Column()
    field: string;

    @Column()
    compare: number;

    @Column()
    database_query: string;
}