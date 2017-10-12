import {Action} from "@ngrx/store";
import {NavigationContent} from "../models/navigation-content";


export const SHOW_SIDE_NAV = "[core_layout] Show sideNav";
export const HIDE_SIDE_NAV = "[core_layout] Hide sideNav";
export const SET_SIDE_NAV_CONTENT = "[core_layout] Set sideNavContent";


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

export type Actions = ShowSideNav | HideSideNav | SetSideNavContent;
