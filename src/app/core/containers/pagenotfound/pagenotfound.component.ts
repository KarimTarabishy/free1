import {ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import * as fromRoot from '../../../reducers';
import {Store} from "@ngrx/store";
import * as layout from '../../actions/layout';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagenotfoundComponent implements OnDestroy {
  @HostBinding("attr.class") HOST_CLASSES = "ui grid full height middle aligned center aligned";
  constructor() {
  }

  ngOnDestroy() {
  }

}
