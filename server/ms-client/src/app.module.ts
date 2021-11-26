import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import { DbModule } from './db/db.module';
import { GameModule } from './game/game.module';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    QuestionModule, 
    DbModule, 
    GameModule, 
    ConfigModule.forRoot(),
    ClientsModule.register([
      { name: 'AUTH_SERVICE', transport: Transport.TCP},
    ]),
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
