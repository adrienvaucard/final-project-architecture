import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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
      `${environment.apiUrl}/games`,
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

  public updateGame(token: any, gameId: number, result: number) {
    const headers = new HttpHeaders({
      Authorization: "Bearer " + token
    });

    return this.http.put(
      `${environment.apiUrl}/games/`,
      {
        "id": gameId,
        "points": result
      },
      {
        headers: headers
      }
    );
  }
}
