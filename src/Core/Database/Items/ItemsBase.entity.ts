import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('items_base')
export class ItemsBaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    sprite_id: number;

    @Column()
    public_name: string;

    @Column()
    item_name: string;

    @Column()
    type: string;

    @Column()
    width: number;

    @Column()
    length: number;

    @Column()
    stack_height: number;

    @Column()
    allow_stack: number;

    @Column()
    allow_sit: number;

    @Column()
    allow_lay: number;

    @Column()
    allow_walk: number;

    @Column()
    allow_gift: number;

    @Column()
    allow_trade: number;

    @Column()
    allow_recycle: number;

    @Column()
    allow_marketplace_sell: number;

    @Column()
    allow_inventory_stack: number;

    @Column()
    interaction_type: string;

    @Column()
    interaction_modes_count: number;

    @Column()
    vending_ids: string;

    @Column()
    multiheight: string;

    @Column()
    customparams: string;

    @Column()
    effect_id_male: number;

    @Column()
    effect_id_female: number;

    @Column()
    clothing_on_walk: string;
}