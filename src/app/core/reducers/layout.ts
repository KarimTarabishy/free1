import * as layout from "../actions/layout";
import {NavigationContent} from "../models/navigation-content";


export interface State {
  showNavBar: boolean;
  navBarContent: Array<NavigationContent>,
  topBarContent: TopBarContent;
}

const initialState: State = {
  showNavBar: false,
  navBarContent: [],
  topBarContent: null
};


export function reducer(state: State = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.SHOW_SIDE_NAV:
      return {
        ...state,
        showNavBar: true
      };
    case layout.HIDE_SIDE_NAV:
      return {
        ...state,
        showNavBar: false
      };
    case layout.SET_SIDE_NAV_CONTENT:
      return {
        ...state,
        navBarContent: action.payload
      };
    case layout.SET_TOP_BAR_CONTENT:
      return {
        ...state,
        topBarContent: action.payload
      };
    default:
      return state;
  }
}

export const getShowNavBar = (state: State): boolean => state.showNavBar;
export const getNavBarContent = (state: State): Array<NavigationContent>  => state.navBarContent;
export const getTopBarContent = (state: State): TopBarContent => state.topBarContent;
