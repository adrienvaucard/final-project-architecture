import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class StatService {
    constructor(
        @Inject('STAT_SERVICE') private client: ClientProxy, 
      ){}
      
    async find(userId: string) {
        return this.client.send({ role: 'stats', cmd: 'get' }, userId);  
    }
}
