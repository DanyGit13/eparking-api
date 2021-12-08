import { EntityRepository, Repository, VersionColumn } from "typeorm";
import { Vehicle } from "./vehicle.entity";

@EntityRepository(Vehicle)
export class VehicleRepository extends Repository<Vehicle>{

}