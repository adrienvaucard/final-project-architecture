import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public questionsNumber: '5' | '10' | '20' = '5';
  public theme: 'burgerQuiz' | 'other' = 'burgerQuiz';
  public loading = false;

  public gameNumber: string = '0';
  public goodAnswers: string = '0';
  public averageScore: string = '0';

  constructor() { }



  ngOnInit(): void {
    this.getProfile()
  }

  public play() {
    console.log(this.questionsNumber, this.theme)
    this.loading = true;
    // launch game with questionsNumber and theme
  }

  public getProfile() {
    //to do
  }

}
