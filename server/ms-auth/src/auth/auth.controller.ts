import { Controller, Get, HttpException, HttpStatus, Res, UseGuards } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @MessagePattern({ role: 'auth', cmd: 'register' })
    async register(userDto: CreateUserDto) {
        return await this.authService.register(userDto)
    }

    // @UseGuards(AuthGuard('local'))
    @MessagePattern({ role: 'auth', cmd: 'login' })
    async login(@Payload() user: User) {
        try {
            return this.authService.login(user);
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Invalid Login',
              }, HttpStatus.FORBIDDEN);
        }
    }
}
