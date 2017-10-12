import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import * as fromRoot from "./reducers/index";
import {NavigationContent} from "./core/models/navigation-content";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showNav$: Observable<Boolean>;
  navBarContent$: Observable<Array<NavigationContent>>;
  constructor(private store: Store<fromRoot.State>) {
    this.showNav$ = this.store.select(fromRoot.getShowNavBar);
    this.navBarContent$ = this.store.select(fromRoot.getNavBarContent);
  }

  ngOnInit(): void {
  }



}
