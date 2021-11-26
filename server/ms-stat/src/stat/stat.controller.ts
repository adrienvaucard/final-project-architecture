import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { StatService } from './stat.service';

@Controller('stats')
export class StatController {
    constructor(private readonly statService: StatService) {}

    @MessagePattern({ role: 'stats', cmd: 'get' })
    async getStats(@Payload() userId: string) {
        return await this.statService.find(userId);
    }
}
