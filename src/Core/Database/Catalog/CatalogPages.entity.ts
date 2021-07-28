import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('catalog_pages')
export class CatalogPagesEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    parent_id: number;

    @Column()
    caption_save: string;

    @Column()
    caption: string;

    @Column()
    page_layout: string;

    @Column()
    icon_color: number;

    @Column()
    icon_image: number;

    @Column()
    min_rank: number;

    @Column()
    order_num: number;

    @Column()
    visible: number;
    
    @Column()
    enabled: number;

    @Column()
    club_only: number;

    @Column()
    vip_only: number;

    @Column()
    page_headline: string;

    @Column()
    page_teaser: string;

    @Column()
    page_special: string;

    @Column()
    page_text1: string;

    @Column()
    page_text2: string;

    @Column()
    page_text_details: string;

    @Column()
    page_text_teaser: string;

    @Column()
    room_id: number;

    @Column()
    includes: string;
}