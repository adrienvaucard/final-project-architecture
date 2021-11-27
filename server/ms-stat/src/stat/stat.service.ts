import { Injectable } from '@nestjs/common';
import { JsonDB } from 'node-json-db';
import { CreateGameDto } from 'src/game/create-game.dto';
import { DbService } from '../db/db.service';

@Injectable()
export class StatService {
    private databaseConnection: JsonDB

    constructor(
        private dbService: DbService
    ) {
        this.databaseConnection = dbService.getConnection();
    }

    async find(userId: string) {
        let userGames = await this.databaseConnection.filter('/games', (game) => game.user.includes(userId) && game.points > 0);
        let totalAnswers = 0;
        userGames.forEach((game: CreateGameDto) => {
            totalAnswers += game.points
        })

        let stats = {
            gamesNUmber: userGames.length,
            goodAnswers: totalAnswers,
            averageScore: Math.round(totalAnswers / userGames.length)
        }
        return stats
      }
}
