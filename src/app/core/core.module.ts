import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [PagenotfoundComponent, TopbarComponent, NavbarComponent]
})
export class CoreModule { }
