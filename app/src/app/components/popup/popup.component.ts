import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  animations: [
    trigger('enterTransition', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'scale(0.6)',
        })
      ),
      transition('void <=> *', animate('200ms ease-out')),
    ]),
  ],
})
export class PopupComponent implements OnInit, OnDestroy {
  @Input() title = '';
  @Input() height = 'auto';
  @Input() width = '50%';

  @Output() closePopup = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.setPageClick(false);
  }

  ngOnDestroy() {
    this.setPageClick(true);
  }

  private setPageClick(clickEnable: any) {
    const pageRef = document.getElementById('page-ref');
    if (pageRef) {
      pageRef.style.pointerEvents = clickEnable ? 'auto' : 'none';
    }
  }

  public close() {
    this.closePopup.emit();
  }
}
