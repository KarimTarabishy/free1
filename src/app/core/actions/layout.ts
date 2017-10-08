import {Action} from "@ngrx/store";


export const SHOW_SIDE_NAV = "[core_layout] Show sideNav";
export const HIDE_SIDE_NAV = "[core_layout] Hide sideNav";
export const SET_SIDE_NAV_CONTENT = "[core_layout] Set sideNavContent";


class ShowSideNav implements Action {
  readonly type = SHOW_SIDE_NAV;
}

class HideSideNav implements Action {
  readonly type = HIDE_SIDE_NAV;
}

class SetSideNavContent implements Action {
  readonly type = SET_SIDE_NAV_CONTENT;
  constructor(public payload: {[key: string]: string}) {}
}

export type Actions = ShowSideNav | HideSideNav | SetSideNavContent;
