import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import { DbModule } from './db/db.module';
import { GameModule } from './game/game.module';

@Module({
  imports: [QuestionModule, DbModule, GameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
