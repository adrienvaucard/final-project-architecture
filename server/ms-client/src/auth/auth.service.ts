import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from 'src/user/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        @Inject('AUTH_SERVICE') private client: ClientProxy, 
      ){}
      
      async register(user: CreateUserDto) {
        return this.client.send({ role: 'auth', cmd: 'register' }, {
            username: user.username,
            password: user.password,
        });
      }

      login(user: CreateUserDto) {
        return this.client.send({ role: 'auth', cmd: 'login' }, {
            username: user.username,
            password: user.password,
        });
      }
}
