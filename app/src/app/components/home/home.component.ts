import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../services/user.service";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public questionsNumber: '5' | '10' | '20' = '5';
  public theme: 'Burger Quiz' | 'Marvel' = 'Burger Quiz';
  public loading = false;

  public gamesNumber: string | null = '0';
  public goodAnswers: string | null = '0';
  public averageScore: string | null = '0';

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.getProfile()
  }

  public play() {
    this.loading = true;
    try {
      localStorage.setItem("questionsNumber", this.questionsNumber);
      localStorage.setItem("theme", this.theme);
      this.router.navigate(['game']);
    } catch (error) {

    }
  }

  public getProfile() {
    // this.loading = true;
    try {
      const token = localStorage.getItem("token")
      const parsedToken = JSON.parse(<string>token).access_token
      let decodedToken: any = jwt_decode(<string>token);

      this.userService.retrieveStats(parsedToken, decodedToken.id).subscribe((res: any) => {
        this.gamesNumber = res.gamesNumber
        this.goodAnswers = res.goodAnswers
        this.averageScore = res.averageScore
      })
    } catch (error) {
      
    }
  }
}
