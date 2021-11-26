import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { DbService } from 'src/db/db.service';
import { JsonDB } from 'node-json-db';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class QuestionService {
  private databaseConnection: JsonDB
  constructor(
    private dbService: DbService
  ) {
    this.databaseConnection = dbService.getConnection();
  }
  create(createQuestionDto: CreateQuestionDto) {
    return this.databaseConnection.push("/questions[]", {
      id: uuidv4(),
      ...createQuestionDto
    });
  }

  findAll() {
    return this.databaseConnection.getData("/questions");
  }

  findOne(id: number) {
    const index = this.databaseConnection.getIndex('/questions', id, 'id');
    return this.databaseConnection.getData(`/questions[${index}]`)
  }
}
