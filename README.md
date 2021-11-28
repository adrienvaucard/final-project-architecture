# ZeQuiz

This project is a simple app to run a browser-based quiz game.
Some questions come from a well-known TV Show in France named "Burger Quiz"

## Installation
To run this project, you need to have Docker installed in your machine.
Then, you have to build and run the containers.

```
docker-compose build
docker-compose up
```
:warning: If you rights encounters errors with this command, try running it with `sudo`.

The quiz will be up and running at [http://localhost:4200](http://localhost:4200)

Et Voilà !

## Architecture

In order to make this project, we had to organize it with separated back-end and front-end.

The Front-End is developed with Angular 13 whereas the Back-End is based on Nestjs 8 with independant microservices.

### Microservices

We had a strong constraint of making microservices independents, so we had to make every one has a single project.

This is partly why we choose to use NestJS, because it can easily handle this type of architecture.

To define microservices, we have to register it in the `main.ts` file :
```ts
async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'auth',
        port: 3001,
      },
    },
  );

  await app.listen();

}
```
Here, we specify all of the parameters of the microservice, in order to allow it to be accessible by the others.

- `host`: Hostname where we will target it
- `port`: Port exposed

Then, in the gateway API, we register this microservice in the `app.module.ts` and in the module which will request it (here, in `auth.module.ts`). That way, it will be known be the app.
```ts
@Module({
  imports: [
    GameModule, 
    StatModule,
    ConfigModule.forRoot(),
    ClientsModule.register([
      { name: 'AUTH_SERVICE', transport: Transport.TCP},
      { name: 'GAME_SERVICE', transport: Transport.TCP},
      { name: 'STAT_SERVICE', transport: Transport.TCP}
    ]),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
```
```ts
@Module({
  imports: [
    ConfigModule
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: 'AUTH_SERVICE',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: 'auth',
            port: 3001,
          },
        }),
    }
  ]
})
export class AuthModule {}
```

### Docker

Since this project is quite complicated in its architecture, we decided to simplify it to run it properly. So we dockerized all of the microservices, API and Front-End.

All of the apps contain a `Dockerfile` which list all of the actions to run in the container. In addition, all of the files are used by a single `docker-compose.yml` at the project root. 

---

### Database

In order to work easier by group, we choose to use `node-json-db` to use a JSON file as database. In that way, we could easily check data in a file (and add it by the way) instead of handling a Postgres or MySQL instance.

In insights, we made it more difficult for us, because it would have been much easier to setup a regular database at the sight of the problems encountered.

The main problem is that as long as the project is run, the content of the file is cached and all the new data added is not retrieved in the next requests.

In this case, for instance, when a user starts a game and finish it, the results are pushed to the database, but not updated in its stats on the home page.

A Workaround for this is to stop the running containers, by stopping our terminal or by running : 
```
docker-compose down
```

Then, we can re-run the project and the data will be updated.

This problem can be fixed by using a regular database system, because this type of data storage doesn't have to be use in a production app at all !

---

## Contributors

- [@Kwoak](https://github.com/Kwoak)
- [@AlexSuchot](https://github.com/AlexSuchot)
- [@adrienvaucard](https://github.com/adrienvaucard)

