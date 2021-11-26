import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  public signin(username: string, password: string) {
    return this.http.post(
      `localhost:3000/auth/signin`,
      {
          username,
          password
      },
    );
  }

  public signup(username: string, password: string) {
    return this.http.post(
      `localhost:3000/auth/signup`,
      {
          username,
          password
      },
    );
  }
}
