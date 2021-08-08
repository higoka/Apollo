import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('room_models')
export class RoomsModelsEntity {
    @PrimaryColumn()
    name: string;

    @Column()
    door_x: number;

    @Column()
    door_y: number;

    @Column()
    door_dir: number;

    @Column()
    heightmap: string;

    @Column()
    public_items: string;

    @Column()
    club_only: number;
}