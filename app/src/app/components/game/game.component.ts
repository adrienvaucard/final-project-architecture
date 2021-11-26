import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GameService} from "../../services/game.service";
import {JsonObject} from "@angular/compiler-cli/ngcc/src/packages/entry_point";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public loading = false;
  public questionList = [];

  constructor(private router: Router, private game: GameService) {}

  ngOnInit(): void {
    this.getQuestions()
  }

  public getQuestions() {
    const questionsNumber = localStorage.getItem("questionsNumber");
    const theme = localStorage.getItem("theme");
    const token = localStorage.getItem("token");

    this.questionList = JSON.parse(this.game.newGame(questionsNumber, theme , token));

    this.questionList.forEach((question: JsonObject) => {
      question.chosenAnswer = 0;
    });
  }

  public validate() {
    this.loading = true;

    let goodAnswers: number = 0;
    this.questionList.forEach((question: JsonObject) => {
      if (question.answer === question.chosenAnswer) goodAnswers++;
    });

    localStorage.setItem("result", String(goodAnswers));

    const result = localStorage.getItem("result");


    // envoi du résultat au serveur

    this.router.navigate(['results']);
  }

}
