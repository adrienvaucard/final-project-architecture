import { Component } from '@angular/core';

@Component({
  selector: 'popup-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  public title = '';
  public windowWidth;

  constructor() {
    this.windowWidth = window.innerWidth;
  }
}
