import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ParkingsController } from "./parkings.controller";
import { ParkingsRepository } from "./parkings.repository";
import { ParkingsService } from "./parkings.service";

@Module({
    imports: [TypeOrmModule.forFeature([ParkingsRepository])],
    controllers: [ParkingsController],
    providers: [ParkingsService],
})
export class ParkingsModule {}
