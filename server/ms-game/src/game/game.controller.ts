import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UpdateGameDto } from './dto/update-game.dto copy';


@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @MessagePattern({ role: 'game', cmd: 'create' })
  async create(@Payload() createGameDto: CreateGameDto) {
    console.log(createGameDto)
    return await this.gameService.create(createGameDto);
  }

  @MessagePattern({ role: 'game', cmd: 'update' })
  async update(@Payload() updateGameDto: UpdateGameDto) {
    console.log(updateGameDto)
    return await this.gameService.update(updateGameDto);
  }

  // @Get()
  // findAll() {
  //   return this.gameService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.gameService.findOne(+id);
  // }
}

