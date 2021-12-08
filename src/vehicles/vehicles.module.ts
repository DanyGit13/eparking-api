import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VehiclesController } from "./vehicles.controller";
import { VehicleRepository } from "./vehicles.repository";
import { VehiclesService } from "./vehicles.service";

@Module({
    imports: [TypeOrmModule.forFeature([VehicleRepository])],
    controllers: [VehiclesController],
    providers: [VehiclesService],

})
export class VehiclesModule {}
