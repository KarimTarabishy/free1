import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AdminActivateGuard} from "./guards/admin.activateguard";
import {AdminFeedsPageComponent} from "./containers/feedspage/admin-feedspage.component";
import {AdminUsersPageComponent} from "./containers/userspage/admin-userspage.component";
import {AdminShopsPageComponent} from "./containers/shopspage/admin-shopspage.component";
import {AdminInterestsPageComponent} from "./containers/interestspage/admin-interestspage.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminActivateGuard],
    children: [
      {
        path: '',
        children: [
          {path: '', redirectTo: "feed", pathMatch: "full"},
          {path: 'feed', component: AdminFeedsPageComponent},
          {path: 'users', component: AdminUsersPageComponent},
          {path: 'shops', component: AdminShopsPageComponent},
          {path: 'interests', component: AdminInterestsPageComponent}
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
