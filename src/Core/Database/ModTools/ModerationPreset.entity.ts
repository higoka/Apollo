import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('support_issue_presets')
export class ModerationPresetEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    category: number;

    @Column()
    name: string;

    @Column()
    message: string;

    @Column()
    reminder: string;

    @Column()
    ban_for: number;

    @Column()
    mute_for: number;
}