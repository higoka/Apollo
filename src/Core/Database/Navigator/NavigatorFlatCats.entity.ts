import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('navigator_flatcats')
export class NavigatorFlatCatsEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    min_rank: number;

    @Column()
    caption_save: number;

    @Column()
    caption: string;

    @Column()
    can_trade: number;

    @Column()
    max_user_count: number;

    @Column()
    public: number;

    @Column()
    list_type: number;

    @Column()
    order_num: number;
}