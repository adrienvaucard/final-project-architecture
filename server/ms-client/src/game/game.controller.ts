import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto copy';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    console.log(createGameDto)
    return this.gameService.create(createGameDto);
  }

  @Put()
  update(@Body() updateGameDto: UpdateGameDto) {
    console.log(updateGameDto)
    return this.gameService.update(updateGameDto);
  }
}
