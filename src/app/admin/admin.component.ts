import { Component, OnInit } from '@angular/core';
import * as fromRoot from "./../reducers";
import * as layout from "./../core/actions/layout";
import {Store} from "@ngrx/store";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  readonly NAVIGATION_CONTENT = [
    {name: 'Feed', icon: 'feed', url: '/admin/feed'},
    {name: 'Users', icon: 'users', url: '/admin/users'},
    {name: 'Shops', icon: 'suitcase', url: '/admin/shops'},
    {name: 'User Interests', icon: 'star', url: '/admin/interests'}
  ];


  constructor(private store: Store<fromRoot.State>) {
    this.store.dispatch(new layout.ShowSideNav());
    this.store.dispatch(new layout.SetSideNavContent(this.NAVIGATION_CONTENT));
    this.store.dispatch(new layout.SetTopBarContent(
      new TopBarContent("/admin/user_setting")
    ));
  }

  ngOnInit() {
  }

}
