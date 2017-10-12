import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from '../../../reducers';
import * as layout from '../../actions/layout';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-login',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  type$: Observable<String>;
  constructor(private store: Store<fromRoot.State>,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    setTimeout(() => this.store.dispatch(new layout.HideSideNav()), 0);
    this.type$ = this.route.paramMap.map<ParamMap, String>(paramMap => {
      return paramMap.get("type");
    });

  }

  ngOnDestroy(): void {
    setTimeout(() => this.store.dispatch(new layout.ShowSideNav()), 0);
  }
}
