import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult } from "typeorm";
import { CreateVehicleDto } from "./dto/create-vehicle.dto";
import { Vehicle } from "./vehicle.entity";
import { VehicleRepository } from "./vehicles.repository";

@Injectable()
export class VehiclesService{

    constructor(
        @InjectRepository(VehicleRepository)
        private vehicleRepository: VehicleRepository
    ) {}

    async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
        const vehicle = this.vehicleRepository.create(createVehicleDto);
        await this.vehicleRepository.save(vehicle);
        return vehicle;
    } 

    async findAll(): Promise<Vehicle[]>{
        return await this.vehicleRepository.find();
    }

   async deleteVehicule(id: number): Promise<any>{
       return await this.vehicleRepository.delete(id);
   }
   

}
