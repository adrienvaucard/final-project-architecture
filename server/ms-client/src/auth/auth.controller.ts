import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/register')
    async register(@Body() user: CreateUserDto) {
        return await this.authService.register(user);
    }

    @Post('/login')
    login(@Body() user: CreateUserDto) {
        return this.authService.login(user);
    }
}
