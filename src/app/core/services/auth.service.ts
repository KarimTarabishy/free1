import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/merge';
import {User} from "../models/user";
import {CookieService} from "ngx-cookie-service";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../reducers";
import * as auth from "../actions/auth";
import {observable} from "rxjs/symbol/observable";
import {materialize} from "rxjs/operator/materialize";


@Injectable()
export class AuthService {
  readonly USER_NAME = "admin";
  readonly USER_PASS = "admin";
  readonly USER_TOKEN = "12345";
  constructor(private cookies: CookieService, private store: Store<fromRoot.State>) { }

  silentLogin(type: string): Observable<boolean> {
    return Observable.merge(
      this.store.select(fromRoot.getCurrentUser).take(1),
      this.getUserByToken(type))
      .first(user => {
        console.log(!!user);
        return !!user;
      }, user => user, null
      )
      .do((user) => {
        if (user) {
          this.store.dispatch(new auth.SetUser(user));
        }
      })
      .map<User, boolean>( user => !!user);

  }
  login(name: String, password: String, type: string): Observable<boolean> {
      return this.getUserByPass(name, password, type)
        .do(user => {
          if (user) {
            this.store.dispatch(new auth.SetUser(user));
            this.cookies.set("token", this.USER_TOKEN);
          }
        })
        .map<User, boolean>(user => !!user);
  }

  getUserByPass(name: String, password: String, type: string): Observable<User> {
    if (name === "admin" && password === "admin") {
      return Observable.of<User>(new User("Admin", "admin")).delay(1000)
        .map<User, User>(user => user.type === type ? user : null);
    }
    if (name === "error") {
      return Observable.throw("Couldn't reach server.")
        .materialize().delay(1000).dematerialize();
    }
    return Observable.of<User>(null).delay(1000);


  }

  getUserByToken(type: string): Observable<User> {
    if (this.cookies.check("token") && this.cookies.get("token") === this.USER_TOKEN) {
      return Observable.of<User>(new User("Admin", "admin"))
        .map<User, User>(user => user.type === type ? user : null);
    }
    return Observable.of(null);
  }

  logout() {
    this.cookies.delete("token");
    this.store.dispatch(new auth.SetUser(null));
  }
}
