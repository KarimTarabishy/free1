import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PagenotfoundComponent, TopbarComponent, NavbarComponent],
  exports: [PagenotfoundComponent, TopbarComponent, NavbarComponent]
})
export class CoreModule { }
