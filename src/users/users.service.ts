import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateResult } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository
    ) {}


     async create(createUserDto: CreateUserDto): Promise<User> {
        const user = this.usersRepository.create(createUserDto);
        await this.usersRepository.save(user);
        return user;
    }

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find(); 
        ;
    }

    async findOne(id: number): Promise<User>{
        const user = await this.usersRepository.findOne(id);
        return user;
    }

    async updateUser(id: number, body: CreateUserDto): Promise<User>{
        await this.usersRepository.update(id, body);
        return await this.findOne(id);
    }

    async deleteUser(id: number): Promise<any>{
        return await this.usersRepository.delete(id);
    }

}