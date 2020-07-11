import { Repository } from 'typeorm';
import { UserEntity } from "../entity/user.entity";
import { UserModel } from "../models/user.model";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    addNewUser(user: UserModel): Promise<UserModel>;
    ifExist(user: UserModel): Promise<UserModel>;
}
