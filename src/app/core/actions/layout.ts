import {Action} from "@ngrx/store";
import {NavigationContent} from "../models/navigation-content";


export const SHOW_SIDE_NAV = "[core_layout] Show sideNav";
export const HIDE_SIDE_NAV = "[core_layout] Hide sideNav";
export const SET_SIDE_NAV_CONTENT = "[core_layout] Set sideNavContent";
export const SET_TOP_BAR_CONTENT = "[core_layout] Set topBarContent";


export class ShowSideNav implements Action {
  readonly type = SHOW_SIDE_NAV;
}

export class HideSideNav implements Action {
  readonly type = HIDE_SIDE_NAV;
}

export class SetSideNavContent implements Action {
  readonly type = SET_SIDE_NAV_CONTENT;
  constructor(public payload: Array<NavigationContent>) {}
}

export class SetTopBarContent implements Action {
  readonly type = SET_TOP_BAR_CONTENT;
  constructor(public payload: TopBarContent) {}
}

export type Actions = ShowSideNav | HideSideNav | SetSideNavContent | SetTopBarContent;



