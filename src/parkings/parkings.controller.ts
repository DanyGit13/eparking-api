import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateParkingDto } from './dto/create-parking.dto';
import { Parking } from './parking.entity';
import { ParkingsService } from './parkings.service';

@Controller('parkings')
export class ParkingsController {

    constructor(
        private readonly parkingService: ParkingsService
     ) {}

    @Get()
    findAll(): Promise<Parking[]> {
        return this.parkingService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') id: number): Promise<Parking> {
        return this.parkingService.findOne(id);
    }

    @Post()
    create(@Body() createParkingDto: CreateParkingDto): Promise<Parking> {
        return this.parkingService.create(createParkingDto);
    }

    @Put('/:id')
    update(@Param('id') id: string): string {
        return `This action updates a #${id} parking`;
    }

    @Delete('/:id')
    remove(@Param('id') id: string): string {
        return `This action removes a #${id} parking`;
    }
}
