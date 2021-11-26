import { Controller, Get, Param } from '@nestjs/common';
import { StatService } from './stat.service';

@Controller('stats')
export class StatController {
    constructor(private readonly statService: StatService) {}

    @Get('/:userId')
    async findStats(@Param() params: any) {
        return this.statService.find(params.userId);
    }
}
