import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    price: number;
    
    @Column()
    createdAt: Date;
    
    @Column()
    updatedAt: Date;

    @Column()
    userId: number;
    
    @Column()
    vehicleId: number;
    
    @Column()
    parkingId: number;
}
