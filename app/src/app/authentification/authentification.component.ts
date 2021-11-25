import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export const IDENTIFICATION_NUMBER = 8;

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss'],
})
export class AuthentificationComponent implements OnInit {
  public error = '';
  public loading = false;
  public remember = false;
  public buttonSSO = false;

  public codeId = '';
  public codeCustomer = '';
  public codePin = '';

  public arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  public disabled = true;

  public getIdsModalOpened = false;
  public windowWidth;

  @HostListener('document:keypress', ['$event'])
  onKeyPress(event: { keyCode: number; }) {
    if (
      event.keyCode === 13 &&
      this.codeCustomer.length === 4 &&
      this.codeId.length === IDENTIFICATION_NUMBER &&
      this.codePin.length === 4
    ) {
      this.login();
    }
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp() {
    if (
      !this.getIdsModalOpened &&
      this.codeCustomer.length === 4 &&
      !this.codeId
    ) {
      // document.getElementById('codeId').focus();
    }
    if (this.codeCustomer.length < 4) {
      this.buttonSSO = false;
    }
  }

  constructor(
    private router: Router
  ) {
    this.windowWidth = window.innerWidth;
  }

  ngOnInit() {
  }

  public login() {
    this.loading = true;
    //login
  }

  public touch($event: string) {
    this.error = '';
    if (
      this.codePin.length < 4 &&
      this.codeId.length >= IDENTIFICATION_NUMBER &&
      this.codeCustomer.length === 4
    ) {
      this.codePin += $event;
    }
  }

  public clearCodePin() {
    this.codePin = '';
  }
  public clearCodeId() {
    this.codeId = '';
    this.codePin = '';
    localStorage.removeItem('codePortal');
  }
  public clearCodeCustomer() {
    this.codeCustomer = '';
    this.codeId = '';
    this.codePin = '';
    localStorage.removeItem('codePortal');
    this.error = '';
  }

  public saveRemember(event: any) {
    localStorage.setItem('codePortalRemember', event);
  }

  public openGetIdsModal() {
    this.getIdsModalOpened = true;
  }

  public closeGetIdsModal() {
    this.getIdsModalOpened = false;
    if (this.codeCustomer.length === 4) {
      // document.getElementById('codeId').focus();
    }
  }

  public fillCodeCustomer(clientCode: string) {
    this.codeCustomer = clientCode;
  }
}
