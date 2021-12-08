import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult } from "typeorm";
import { CreateParkingDto } from "./dto/create-parking.dto";
import { Parking } from "./parking.entity";
import { ParkingsRepository } from "./parkings.repository";

@Injectable()
export class ParkingsService {
    
    constructor(
        @InjectRepository(ParkingsRepository)
        private parkingRepository: ParkingsRepository
    ) {}
    
    async create(createParkingDto: CreateParkingDto): Promise<Parking> {
        const parking = this.parkingRepository.create(createParkingDto);
        await this.parkingRepository.save(parking);
        return parking;
    }
    
    async findAll(): Promise<Parking[]> {
        const list = await this.parkingRepository.find(); 
        return list;
    }
    
    async findOne(id: number): Promise<Parking> {
        const found = await this.parkingRepository.findOne(id);
        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return found;
    }

    updateParking(id: number, parking: Parking): Parking {
        // const index = this.parkings.findIndex(p => p.id === id);
        // this.parkings[index] = parking;
        return parking;
    }

    deleteParking(id: number): void {
        //this.parkings = this.parkings.filter(parking => parking.id !== id);
    }
}