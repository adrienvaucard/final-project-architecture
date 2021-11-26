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
    // Retrieve theme and questions number
    await this.databaseConnection.push("/games[]", {
      id: uuidv4(),
      ...createGameDto
    });

    return createGameDto
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
