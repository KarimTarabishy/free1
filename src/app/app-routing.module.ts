import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagenotfoundComponent} from "./core/containers/pagenotfound/pagenotfound.component";
import {StartPageComponent} from "./core/containers/startpage/startpage.component";
import {LoginPageComponent} from "./core/containers/loginpage/loginpage.component";

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: StartPageComponent},

  {path: "login", redirectTo: 'login/user', pathMatch: "full"},
  {path: "login/:type", component: LoginPageComponent},
  {path: "admin", loadChildren: "app/admin/admin.module#AdminModule"},
  {path: "**", component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
