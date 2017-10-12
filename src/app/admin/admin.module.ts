import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminFeedsPageComponent} from './containers/feedspage/admin-feedspage.component';
import { AdminUsersPageComponent } from './containers/userspage/admin-userspage.component';
import { AdminInterestsPageComponent } from './containers/interestspage/admin-interestspage.component';
import { AdminShopsPageComponent } from './containers/shopspage/admin-shopspage.component';
import {AdminActivateGuard} from "./guards/admin.activateguard";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminFeedsPageComponent,
    AdminUsersPageComponent,
    AdminInterestsPageComponent,
    AdminShopsPageComponent
  ],
  providers: [AdminActivateGuard]
})
export class AdminModule { }
