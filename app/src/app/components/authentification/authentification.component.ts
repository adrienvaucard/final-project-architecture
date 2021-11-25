import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss'],
})
export class AuthentificationComponent implements OnInit {
  public error: any = '';
  public loading = false;

  public password = '';
  public login = '';

  public getRegisterOpened = false;
  public windowWidth;

  constructor(
    private router: Router
  ) {
    this.windowWidth = window.innerWidth;
  }

  ngOnInit() {
  }

  public auth() {
    try {
      //login
      
      if (!this.login) {
        this.error = 'Identifiant requis';
        return;
      }
      
      if (!this.password) {
        this.error = 'Mot de passe requis';
        return;
      }
      this.loading = true;
      
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
