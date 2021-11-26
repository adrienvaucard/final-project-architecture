import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
const saltOrRounds = 10;

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOneByUsername(username);

        if (user) {
            const isMatching: boolean = bcrypt.compareSync(pass, user.password);
            if (isMatching) {
                const { password, ...result } = user;
                return result;
            } else {
                return null;
            }
        } else {
            return null
        }
    }

    async register(userDto: CreateUserDto) {
        await this.userService.create(userDto)
        return userDto
    }

    async login(user: User) {
        let validateUser = await this.validateUser(user.username, user.password)
        if (validateUser) {
            console.log(user)
            const payload = { 
                username: user.username, 
                sub: user.id 
            };
            return {
                access_token: this.jwtService.sign(payload),
            };
        } else {
            return false
        }
    }
}
