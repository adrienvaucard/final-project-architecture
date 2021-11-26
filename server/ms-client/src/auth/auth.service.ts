import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
    constructor(
        @Inject('AUTH_SERVICE') private client: ClientProxy, 
      ){}
      
      async register(username: string, password: string) {
        return this.client.send({ role: 'auth', cmd: 'register' }, {
            username: username,
            password: password,
        });
      }

      login(username: string, password: string) {
        return this.client.send({ role: 'auth', cmd: 'login' }, {
            username: username,
            password: password,
        });
      }
}
