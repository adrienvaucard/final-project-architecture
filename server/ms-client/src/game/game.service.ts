import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { DbService } from 'src/db/db.service';
import { JsonDB } from 'node-json-db';
import {v4 as uuidv4} from 'uuid';


@Injectable()
export class GameService {
  private databaseConnection: JsonDB

  constructor(
    private dbService: DbService
  ) {
    this.databaseConnection = dbService.getConnection();
  }

  create(createGameDto: CreateGameDto) {
    // Retrieve theme and questions number
    return this.databaseConnection.push("/games[]", {
      id: uuidv4(),
      date: new Date(),
      ...createGameDto
    });
  }

  findAll() {
    return this.databaseConnection.getData("/games");
  }

  findOne(id: number) {
    const index = this.databaseConnection.getIndex('/games', id, 'id');
    return this.databaseConnection.getData(`/games[${index}]`)
  }
}
