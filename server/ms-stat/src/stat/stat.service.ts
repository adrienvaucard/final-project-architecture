import { Injectable } from '@nestjs/common';
import { JsonDB } from 'node-json-db';
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
        return userGames
      }
}
