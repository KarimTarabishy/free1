import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import * as fromRoot from "./reducers/index";
import * as auth from "./core/actions/auth";
import * as layout from "./core/actions/layout";
import {NavigationContent} from "./core/models/navigation-content";
import {Router} from "@angular/router";
import {AuthService} from "./core/services/auth.service";
import {User} from "./core/models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showNav$: Observable<Boolean>;
  navBarContent$: Observable<Array<NavigationContent>>;
  user$: Observable<User>;
  topBarContent$: Observable<TopBarContent>;
  constructor(private store: Store<fromRoot.State>,
              private router: Router,
              private authService: AuthService) {
    this.showNav$ = this.store.select(fromRoot.getShowNavBar);
    this.navBarContent$ = this.store.select(fromRoot.getNavBarContent);
    this.user$ = this.store.select(fromRoot.getCurrentUser);
    this.topBarContent$ = this.store.select(fromRoot.getTopBarContent);

  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/home"]);
  }
  ngOnInit(): void {

  }



}
