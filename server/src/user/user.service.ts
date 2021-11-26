import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { DbService } from 'src/db/db.service';
import { JsonDB } from 'node-json-db';
import {v4 as uuidv4} from 'uuid';
import * as bcrypt from 'bcrypt';
const saltOrRounds = 10;

@Injectable()
export class UserService {
  private databaseConnection: JsonDB

  constructor(
    private dbService: DbService
  ) {
    this.databaseConnection = dbService.getConnection();
  }

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(createUserDto.password, saltOrRounds);
    return this.databaseConnection.push("/users[]", {
      id: uuidv4(),
      ...createUserDto
    });
  }

  findAll() {
    return this.databaseConnection.getData("/users");
  }

  findOne(id: number) {
    const index = this.databaseConnection.getIndex('/users', id, 'id');
    return this.databaseConnection.getData(`/users[${index}]`)
  }
}
