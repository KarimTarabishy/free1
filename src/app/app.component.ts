import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import * as fromRoot from "./reducers/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showNav$: Observable<Boolean>;
  constructor(private store: Store<fromRoot.State>) {
    this.showNav$ = this.store.select(fromRoot.getShowNavBar);
  }

  ngOnInit(): void {
  }



}
