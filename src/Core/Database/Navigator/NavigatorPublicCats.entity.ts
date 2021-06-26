import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('navigator_publiccats')
export class NavigatorPublicCatsEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    image: number;

    @Column()
    visible: number;

    @Column()
    order_num: number;
}