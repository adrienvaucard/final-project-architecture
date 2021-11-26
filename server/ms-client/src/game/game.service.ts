import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto copy';


@Injectable()
export class GameService {
  constructor(
    @Inject('GAME_SERVICE') private client: ClientProxy, 
  ){}

  async create(createGameDto: CreateGameDto) {
    return this.client.send({ role: 'game', cmd: 'create' },createGameDto);  
  }

  async update(updateGameDto: UpdateGameDto) {
    return this.client.send({ role: 'game', cmd: 'update' }, updateGameDto); 
  }

  // findAll() {
  //   return this.databaseConnection.getData("/games");
  // }

  // findOne(id: number) {
  //   const index = this.databaseConnection.getIndex('/games', id, 'id');
  //   return this.databaseConnection.getData(`/games[${index}]`)
  // }
}
