import {ChangeDetectionStrategy, Component, HostBinding, OnInit} from '@angular/core';
import * as fromRoot from '../../../reducers';
import * as layout from '../../actions/layout';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-start',
  template: `<span>Great</span>`
})
export class StartPageComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) {
    this.store.dispatch(new layout.ShowSideNav());
  }

  ngOnInit(): void {
  }

}
