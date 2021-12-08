import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Parking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    phone: string;

    @Column()
    description: string;
}
