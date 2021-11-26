import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  constructor(private http: HttpClient) {}

  public retrieveStats(token: string | null, userID: number) {

    const headers = new HttpHeaders({
      Authorization: "Bearer " + token
    });

    return this.http.get(
      `localhost:3000/stats/` + userID,
      {
        headers: headers
      }
    );
  }

  public addStat(token: string, userID: number, result: any) {
    const headers = new HttpHeaders({
      Authorization: "Bearer " + token
    });

    return this.http.post(
      `localhost:3000/stats/` + userID,
      {
        "result": result
      },
      {
        headers: headers
      }
    );
  }
}
