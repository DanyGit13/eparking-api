import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService
     ) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') id: number): Promise<User> {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto):  Promise<User> {
        return this.usersService.create(createUserDto);
    }

    @Put('/:id')
    update(@Param('id') id: number, @Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.updateUser(id, createUserDto);
    }

    @Delete('/:id')
    remove(@Param('id') id: string): string {
        return `This action removes a #${id} user`;
    }
}
