import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, Route, Router,
  RouterStateSnapshot
} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../core/services/auth.service";
import "rxjs/add/operator/do";

@Injectable()
export class AdminActivateGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.silentLogin("admin")
      .do(success => {
        if (!success) {
          this.router.navigate(["/login", {queryParams: {back: state.url}}]);
        }
        console.log("here");
      });
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }

}
