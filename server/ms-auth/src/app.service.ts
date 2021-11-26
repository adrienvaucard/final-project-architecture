import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './user/dto/create-user.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
