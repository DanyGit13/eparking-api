import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('reservations')
export class ReservationsController {
    @Get()
    findAll(): string {
        return 'This action returns all reservations';
    }

    @Get('/:id')
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id} reservation`;
    }

    @Post()
    create(): string {
        return 'This action adds a new reservation';
    }

    @Put('/:id')
    update(@Param('id') id: string): string {
        return `This action updates a #${id} reservation`;
    }

    @Delete('/:id')
    remove(@Param('id') id: string): string {
        return `This action removes a #${id} reservation`;
    }
}
