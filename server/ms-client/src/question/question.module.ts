import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { DbService } from 'src/db/db.service';

@Module({
  controllers: [QuestionController],
  providers: [QuestionService, DbService]
})
export class QuestionModule {}
