import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('catalog_items')
export class CatalogItemsEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    item_ids: number;

    @Column()
    page_id: number;

    @Column()
    catalog_name: string;

    @Column()
    cost_credits: number;

    @Column()
    cost_points: number;

    @Column()
    points_type: number;

    @Column()
    amount: number;

    @Column()
    limited_stack: number;

    @Column()
    limited_sells: number;

    @Column()
    order_number: number;

    @Column()
    offer_id: number;

    @Column()
    song_id: number;

    @Column()
    extradata: string;

    @Column()
    have_offer: number;

    @Column()
    club_only: number;
}