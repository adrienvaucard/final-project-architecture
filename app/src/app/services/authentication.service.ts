import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  public signin(username: string, password: string) {
    return this.http.post(
      `http://localhost:3000/auth/login`,
      {
          username,
          password
      },
    );
  }

  public signup(username: string, password: string) {
    return this.http.post(
      `http://localhost:3000/auth/register`,
      {
          username,
          password
      },
    );
  }
}
