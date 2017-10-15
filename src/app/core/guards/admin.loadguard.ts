import { Injectable } from '@angular/core';
import {CanLoad, Route, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../services/auth.service";
import "rxjs/add/operator/do";

@Injectable()
export class AdminLoadGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {}
  canLoad(route: Route, ): Observable<boolean> {
    return this.authService.silentLogin("admin")
      .do(success => {
        if (!success) {
          this.router.navigate(["/login", "admin"], {queryParams: {back: route.path}});
        }
      });
  }


}
