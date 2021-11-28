import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  public signin(username: string, password: string) {
    return this.http.post(
      `${environment.apiUrl}/auth/login`,
      {
          username,
          password
      },
    );
  }

  public signup(username: string, password: string) {
    return this.http.post(
      `${environment.apiUrl}/auth/register`,
      {
          username,
          password
      },
    );
  }
}
