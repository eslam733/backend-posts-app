import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from "../entity/user.entity";
import { UserModel } from "../models/user.model";
import {from} from 'rxjs';
import { format } from "path";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
      ) {}
    
    async addNewUser(user: UserModel): Promise<UserModel> {
        const res = await this.usersRepository.count(user);
        if(res === 0) return this.usersRepository.save(user);
        else return null;
    }

    async ifExist(user: UserModel): Promise<UserModel> {
        const res = await this.usersRepository.count(user);
        if(res) return user;
        else null;
    }
    
}

