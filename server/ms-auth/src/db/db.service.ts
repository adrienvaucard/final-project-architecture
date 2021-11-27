import { Injectable } from '@nestjs/common';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

@Injectable()
export class DbService {
    constructor() {}
    
    getConnection(): JsonDB {
        let connection: JsonDB = null
        if (connection !== null) {
            return connection;
        }
        const db = new JsonDB(new Config('./data/data.json', true, true, '/'));
        connection = db;
        return connection;
    }
}
