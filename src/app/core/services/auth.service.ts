import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/merge';
import {User} from "../models/user";
import {CookieService} from "ngx-cookie-service";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../reducers";


@Injectable()
export class AuthService {
  readonly USER_NAME = "admin";
  readonly USER_PASS = "admin";
  readonly USER_TOKEN = "12345";
  constructor(private cookies: CookieService, private store: Store<fromRoot.State>) { }

  silentLogin(): Observable<User> {
    const current_user$ = this.store.select(fromRoot.getCurrentUser).take(1);
    return Observable.merge<User>(current_user$, this.getUserByToken())
      .filter(user => !!user).take(1);
  }
  login(name: String, password: String): Observable<User> {
      return this.getUserByPass(name, password)
        .do(data => this.cookies.set("token", this.USER_TOKEN));
  }

  getUserByPass(name: String, password: String): Observable<User> {
    if (name === "admin" && password === "admin") {
      return Observable.of<User>(new User("Admin", "admin"));
    }
    return Observable.throw("Invalid user credentials");
  }

  getUserByToken(): Observable<User> {
    if (this.cookies.check("token") && this.cookies.get("token") === this.USER_TOKEN) {
      return Observable.of<User>(new User("Admin", "admin"));
    }
    return Observable.of(null);
  }
}
