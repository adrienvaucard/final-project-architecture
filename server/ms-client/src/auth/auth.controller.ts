import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/register')
    async register(@Body() createUserDto: CreateUserDto) {
        return await this.authService.register(createUserDto.username, createUserDto.password);
    }

    @Post('/login')
    login(@Body() createUserDto: CreateUserDto) {
        return this.authService.login(createUserDto.username, createUserDto.password);
    }
}
