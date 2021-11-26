import { Module } from '@nestjs/common';
import { StatController } from './stat.controller';
import { StatService } from './stat.service';
import { DbService } from '../db/db.service'

@Module({
  controllers: [StatController],
  providers: [StatService, DbService]
})
export class StatModule {}
