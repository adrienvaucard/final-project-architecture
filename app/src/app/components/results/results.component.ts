import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  public result: 'Bravo' | 'Dommage' | null = null;
  public goodAnswers: number | null = null;
  public loading: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.getResults();

  }

  public getResults() {

    return
  }

  public goHome() {
    this.router.navigate(['home']);
  }

}
