import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { DbService } from 'src/db/db.service';
import { JsonDB } from 'node-json-db';
import {v4 as uuidv4} from 'uuid';
import { UpdateGameDto } from './dto/update-game.dto copy';


@Injectable()
export class GameService {
  private databaseConnection: JsonDB

  constructor(
    private dbService: DbService
  ) {
    this.databaseConnection = dbService.getConnection();
  }

  async create(createGameDto: CreateGameDto) {
    let gameId = uuidv4();

    await this.databaseConnection.push("/games[]", {
      id: gameId,
      ...createGameDto
    });

    let questions = this.databaseConnection.filter('/questions', (question) => question.theme.toLowerCase().includes(createGameDto.theme.toLowerCase()));
    let shuffledQuestions = questions.sort(() => 0.5 - Math.random())
    let selectedQuestions = shuffledQuestions.slice(0, createGameDto.questionsNumber)
    return {
      id: gameId,
      questions: selectedQuestions
    }
  }

  async update(updateGameDto: UpdateGameDto) {
    const index = this.databaseConnection.getIndex('/games', updateGameDto.id, 'id');
    let game = this.databaseConnection.getData(`/games[${index}]`)
    game.points = updateGameDto.points;

    await this.databaseConnection.push(`/games[${index}]`, game, true)

    return updateGameDto
  }

  findAll() {
    return this.databaseConnection.getData("/games");
  }

  findOne(id: number) {
    const index = this.databaseConnection.getIndex('/games', id, 'id');
    return this.databaseConnection.getData(`/games[${index}]`)
  }
}
