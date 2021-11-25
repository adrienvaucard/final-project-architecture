import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public questionsNumber: '5' | '10' | '20' = '5';
  public theme: 'burgerQuiz' | 'other' = 'burgerQuiz';
  public loading = false;

  ngOnInit(): void {
  }

  public play() {
    console.log(this.questionsNumber, this.theme)
    this.loading = true;
    // launch game with questionsNumber and theme
  }

}
