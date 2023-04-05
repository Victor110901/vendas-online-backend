import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
    private users: User[] = [];

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        // Criptografar senha
        const saltOrRounds = 10;

        const passwordOrHashed = await hash(createUserDto.password, saltOrRounds);

        const user: User = {
            ...createUserDto,
            id: this.users.length + 1,
            password: passwordOrHashed,
        }

        this.users.push(user)

        return user;
    }

    async getAllUser(): Promise<User[]> {
        return this.users;
    }
}
