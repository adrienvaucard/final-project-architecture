import { JsonObject } from "@angular/compiler-cli/ngcc/src/packages/entry_point";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { GameService } from "../../services/game.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public loading = false;
  public questionList: any = [];
  public gameId: number = 0;

  constructor(private router: Router, private game: GameService) {}

  ngOnInit(): void {
    this.getQuestions()
  }

  public getQuestions() {
    const questionsNumber = localStorage.getItem("questionsNumber");
    const theme = localStorage.getItem("theme");
    const token = localStorage.getItem("token");
    const parsedToken = JSON.parse(<string>token).access_token
    const decodedToken: any = jwt_decode(<string>token);

    this.game.newGame(decodedToken.id, theme, questionsNumber, parsedToken).subscribe((res: any) => {
      this.questionList = res.questions;
      this.gameId = res.id
    });

    this.questionList.forEach((question: JsonObject) => {
      question['chosenAnswer'] = 0;
    });
  }

  public async validate() {
    const token = localStorage.getItem("token");
    const parsedToken = JSON.parse(<string>token).access_token
    const decodedToken: any = jwt_decode(<string>token);

    this.loading = true;

    let goodAnswers: number = 0;
    this.questionList.forEach((question: JsonObject) => {
      if (question['answer'] === question['chosenAnswer']) goodAnswers++;
    });

    localStorage.setItem("result", String(goodAnswers));

    localStorage.setItem('questions', JSON.stringify(this.questionList))

    this.game.updateGame(decodedToken, this.gameId, goodAnswers).subscribe((res: any) => {
      this.router.navigate(['results']);
    })
  }

}
