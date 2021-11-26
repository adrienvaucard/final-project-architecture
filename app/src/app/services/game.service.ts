import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class GameService {
  constructor(private http: HttpClient) {}

  public newGame(user: string, theme: string | null, questionsNumber: string | null, token: string | null) {

    const headers = new HttpHeaders({
      Authorization: "Bearer " + token
    });
    return this.http.post(
      `http://localhost:3000/games`,
      {
        user,
        theme,
        questionsNumber,
        points: 0
      },
      {
        headers: headers,
      }
    );
  }
}
