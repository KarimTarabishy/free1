import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {StartComponent} from "./components/start/start.component";
import {CookieService} from "ngx-cookie-service";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PagenotfoundComponent, TopbarComponent, NavbarComponent, StartComponent],
  exports: [PagenotfoundComponent, TopbarComponent, NavbarComponent, StartComponent],
  providers: [CookieService]
})
export class CoreModule { }
