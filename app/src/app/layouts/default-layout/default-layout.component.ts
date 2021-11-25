import { Component } from '@angular/core';

export const IDENTIFICATION_NUMBER = 8;

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
  public legalNotice = 'https://sowesign.com/en/legal-notice/';

  constructor() {
  }

}
