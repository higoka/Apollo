import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('support_issue_categories')
export class ModerationCategoryEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
}