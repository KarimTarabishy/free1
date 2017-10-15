import {Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from '../../../reducers';
import * as layout from '../../actions/layout';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  @HostBinding("attr.class") HOST_CLASSES = "ui grid full height middle aligned center aligned";
  type$: Observable<String>;
  error: String;
  loading: boolean;
  constructor(private store: Store<fromRoot.State>,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
    this.error = null;
    this.loading = false;
  }

  onSubmit(user: String, password: String, passField: FormControl) {
    this.loading = true;
    const _type = this.route.snapshot.paramMap.get("type");
    const _back = this.route.snapshot.queryParamMap.get("back");
    this.authService.login(user, password, _type)
      .subscribe(status => {
          if  (!status) {
            this.loading = false;
            this.error = "User credentials are not correct.";
            passField.reset();
          } else {
            this.router.navigate([_back]);
          }
        },
        error => {
          this.loading = false;
          passField.reset();
          this.error = error;
        }
      );

  }

  ngOnInit() {
    setTimeout(() => this.store.dispatch(new layout.HideSideNav()), 0);
    this.type$ = this.route.paramMap.map<ParamMap, String>(paramMap => {
      const _type = paramMap.get("type");
      return _type.charAt(0).toUpperCase() + _type.slice(1);
    });
  }

  ngOnDestroy(): void {
    setTimeout(() => this.store.dispatch(new layout.ShowSideNav()), 0);
  }
}
