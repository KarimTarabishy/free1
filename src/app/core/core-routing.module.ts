import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagenotfoundComponent} from "./components/pagenotfound/pagenotfound.component";

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "**", component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
