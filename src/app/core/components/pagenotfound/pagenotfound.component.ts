import {ChangeDetectionStrategy, Component, HostBinding, OnInit} from '@angular/core';
import * as fromRoot from '../../../reducers';
import {Store} from "@ngrx/store";
import * as layout from '../../actions/layout';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagenotfoundComponent {
  @HostBinding("attr.class") HOST_CLASSES = "ui grid full height middle aligned";
  constructor(private store: Store<fromRoot.State>) {
    this.store.dispatch(new layout.HideSideNav());
  }

}
