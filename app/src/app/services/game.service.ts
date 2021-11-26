import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class GameService {
  constructor(private http: HttpClient) {}

  public newGame(questionsNumber: string | null, theme: string | null, token: string | null) {

    const headers = new HttpHeaders({
      Authorization: "Bearer " + token
    });
    let request = this.http.post(
      `localhost:3000/games`,
      {
        questionsNumber: questionsNumber,
        theme: theme
      },
      {
        headers: headers,
      }
    );

    return request.data;
  }
}
