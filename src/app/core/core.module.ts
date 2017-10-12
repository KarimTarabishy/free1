import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundComponent } from './containers/pagenotfound/pagenotfound.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {StartPageComponent} from "./containers/startpage/startpage.component";
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "./services/auth.service";
import {AdminLoadGuard} from "./guards/admin.loadguard";
import { LoginPageComponent } from './containers/loginpage/loginpage.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PagenotfoundComponent, TopbarComponent, NavbarComponent, StartPageComponent, LoginPageComponent],
  exports: [PagenotfoundComponent, TopbarComponent, NavbarComponent, StartPageComponent, LoginPageComponent],
  providers: [CookieService, AuthService, AdminLoadGuard]
})
export class CoreModule { }
