import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatModule } from './stat/stat.module';
import { DbModule } from './db/db.module'

@Module({
  imports: [
    StatModule,
    DbModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
