import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('navigator_publics')
export class NavigatorPublicsEntity {
    @Column()
    public_cat_id: number;

    @Column()
    room_id: number;

    @Column()
    visible: number;
}