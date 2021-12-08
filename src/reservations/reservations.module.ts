import { Module } from "@nestjs/common";
import { ReservationsController } from "./reservations.controller";

@Module({
    imports: [],
    controllers: [ReservationsController],
    providers: [],
})
export class ReservationsModule {}
