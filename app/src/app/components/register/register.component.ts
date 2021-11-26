import {
  Component,
  EventEmitter,
  HostListener, Output
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public windowWidth;
  public login = '';
  public password = '';
  public errorType = '';
  public errorOpened = false;
  public apiErrorMessage = '';
  public loading = false;
  public formError = '';
  public successPopup = false;
  public errorPopup = false;

  @Output() closePopup = new EventEmitter();
  @Output() loginSuccess = new EventEmitter();

  constructor( private router: Router
  ) {
    this.windowWidth = window.innerWidth;
  }

  public closeModal(): void {
    this.closePopup.emit();
  }

  public closeErrorModal(): void {
    this.errorPopup = false;
  }

  public clearlogin(): void {
    this.login = '';
  }

  public clearpassword(): void {
    this.password = '';
  }

  public async register(): Promise<void> {
    if (!this.login) {
      this.formError = 'Identifiant requis';
      this.errorType = 'FormError';
      return;
    }

    if (!this.password) {
      this.formError = 'Mot de passe requis';
      this.errorType = 'FormError';
      return;
    }

    this.loading = true;
    try {
      this.router.navigate(['home']);
      // register to do
    } catch (error) {
      this.launchError(error);
      this.errorPopup = true;
      this.loading = false;
    }
  }

  private launchError(apiError: any): void {
    try {
      switch (apiError.status) {
        case 0:
          this.errorType = 'Connection';
          this.apiErrorMessage = 'Problème de connexion';
          this.errorOpened = true;
          break;
        case 400:
          this.errorType = 'ApiError';
          this.apiErrorMessage = 'Problème de disponibilité du serveur';
          this.errorOpened = true;
          break;
        case 404:
        case 500:
          this.errorType = 'Unknown';
          this.apiErrorMessage = 'Erreur inconnue';
          this.errorOpened = true;
          break;
        default:
          this.errorType = 'Unknown';
          this.apiErrorMessage = 'Erreur inconnue';
          this.errorOpened = true;
          break;
      }
    } catch (error) {
      this.errorType = 'Unknown';
      this.apiErrorMessage = 'Erreur inconnue';
      this.errorOpened = true;
    }
  }
}
