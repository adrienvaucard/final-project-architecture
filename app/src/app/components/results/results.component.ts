import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  public result: 'Bravo' | 'Dommage' | null = null;
  public goodAnswers: any = null;
  public loading: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.getResults();

  }

  public getResults() {
    this.goodAnswers = localStorage.getItem("result")
    const questionsNumber: any = localStorage.getItem("questionsNumber")
    if (parseInt(this.goodAnswers) < (parseInt(questionsNumber) / 2)) {
      this.result = 'Dommage'
    } else {
      this.result = 'Bravo'
    }
  }

  public goHome() {
    this.router.navigate(['home']);
  }

}
