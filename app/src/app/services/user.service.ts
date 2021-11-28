import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

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
      `${environment.apiUrl}/stats/` + userID,
      {
        headers: headers
      }
    );
  }
}
