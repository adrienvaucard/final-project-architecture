import {
  Component,
  EventEmitter,
  HostListener, Output
} from '@angular/core';

@Component({
  selector: 'app-code-request',
  templateUrl: './code-request.component.html',
  styleUrls: ['./code-request.component.scss'],
})
export class CodeRequestComponent {
  public windowWidth;
  public clientCode = '';
  public email = '';
  public personType: '1' | '2' | '3' = '1';
  public errorType = '';
  public errorOpened = false;
  public apiErrorMessage = '';
  public loading = false;
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public formError = '';
  public successPopup = false;
  public errorPopup = false;

  @Output() closePopup = new EventEmitter();
  @Output() clientCodeSuccess = new EventEmitter();

  constructor(
  ) {
    this.windowWidth = window.innerWidth;
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(): boolean {
    if (this.clientCode.length === 4 && !this.email) {
      // document.getElementById('email').focus();
    }
    return true;
  }

  public keyPress(event: any, numeric = true): boolean {
    this.formError = '';
    if (numeric) {
      const keyCodeName = 'keyCode';
      const key = event[keyCodeName];
      return key >= 48 && key <= 57;
    }
    return true;
  }

  public closeModal(): void {
    this.closePopup.emit();
  }

  public closeErrorModal(): void {
    this.errorPopup = false;
  }

  public clearClientCode(): void {
    this.clientCode = '';
  }

  public clearEmail(): void {
    this.email = '';
  }

  public async requestCode(): Promise<void> {
    if (!this.clientCode) {
      this.formError = '1-1.Authentication.InstitutionCodeRequired';
      return;
    }

    if (this.clientCode.length !== 4) {
      this.formError = '1-1.Authentication.InstitutionCodeFormat';
      return;
    }

    if (!this.email || this.email.length === 0) {
      this.formError = '1-1.Authentication.EmailRequired';
      return;
    }

    if (!this.email.match(this.emailPattern)) {
      this.formError = '1-1.Authentication.EmailFormat';
      return;
    }

    this.formError = '';
    this.loading = true;
    try {
      //to do
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
          this.errorOpened = true;
          break;
        case 400:
          this.errorType = 'ApiError';
          this.apiErrorMessage = this.getApiError(apiError);
          this.errorOpened = true;
          break;
        case 404:
        case 500:
          this.errorType = 'Global';
          this.errorOpened = true;
          break;
        default:
          this.errorType = 'Unknown';
          this.errorOpened = true;
          break;
      }
    } catch (error) {
      this.errorType = 'Unknown';
      this.errorOpened = true;
    }
  }

  private getApiError(apiError: any): string {
    try {
      return apiError.error.messages.errors.body[0];
    } catch (error) {
      return '';
    }
  }
}
