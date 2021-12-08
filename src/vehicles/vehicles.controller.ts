import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { Vehicle } from './vehicle.entity';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {

    constructor(
        private readonly vehiculeService: VehiclesService
    ){}

    @Get()
    findAll(): Promise<Vehicle[]> {
        return this.vehiculeService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id} vehicle`;
    }

    @Post()
    create(@Body() createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
        return this.vehiculeService.create(createVehicleDto);
    }

    @Put('/:id')
    update(@Param('id') id: string): string {
        return `This action updates a #${id} vehicle`;
    }

    @Delete('/:id')
    remove(@Param('id') id: number): Promise<any> {
        return this.vehiculeService.deleteVehicule(id);
    }
}
