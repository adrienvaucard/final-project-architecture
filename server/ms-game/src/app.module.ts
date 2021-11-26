import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { GameModule } from './game/game.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [
    DbModule,
    GameModule,
    QuestionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
