import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss'],
})
export class AuthentificationComponent {
  public error: any = '';
  public loading = false;

  public password = '';
  public login = '';

  public getRegisterOpened = false;
  public windowWidth;

  constructor(
    private router: Router,
    private auth: AuthenticationService
  ) {
    this.windowWidth = window.innerWidth;
  }

  public signin() {
    try {
      if (!this.login) {
        this.error = 'Identifiant requis';
        return;
      }
      if (!this.password) {
        this.error = 'Mot de passe requis';
        return;
      }
      this.loading = true;

      // appel de la fonction de connexion
      this.auth.signin(this.login, this.password).subscribe(token => {
        localStorage.setItem('token', JSON.stringify(token))
        this.router.navigate(['home']);
      })
      
    } catch (error) {
      this.loading = false;
      this.error = error
    }
  }

  public clearLogin() {
    this.login = '';
  }
  public clearPassword() {
    this.password = '';
  }

  public openRegisterModal() {
    this.getRegisterOpened = true;
  }

  public closeRegisterModal() {
    this.getRegisterOpened = false;
  }
}
