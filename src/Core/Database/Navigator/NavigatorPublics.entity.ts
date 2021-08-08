import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('navigator_publics')
export class NavigatorPublicsEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    public_cat_id: number;

    @Column()
    room_id: number;

    @Column()
    visible: number;
}