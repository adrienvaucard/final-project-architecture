import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { DbService } from 'src/db/db.service';

@Module({
  providers: [UserService, DbService]
})
export class UserModule {}
