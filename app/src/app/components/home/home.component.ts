import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public questionsNumber: '5' | '10' | '20' = '5';
  public theme: 'burgerQuiz' | 'marvel' = 'burgerQuiz';
  public loading = false;

  public gameNumber: string = '0';
  public goodAnswers: string = '0';
  public averageScore: string = '0';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getProfile()
  }

  public play() {
    this.loading = true;
    try {
      localStorage.setItem("questionGame", this.questionsNumber);
      localStorage.setItem("theme", this.theme);
      this.router.navigate(['game']);
      // launch game with questionsNumber and theme

    } catch (error) {

    }
  }

  public getProfile() {
    //to do
  }

}
