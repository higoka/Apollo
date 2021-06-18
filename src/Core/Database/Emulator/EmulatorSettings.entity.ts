import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('emulator_settings')
export class EmulatorSettingsEntity {
    @PrimaryColumn()
    key: string;

    @Column()
    value: string;
}