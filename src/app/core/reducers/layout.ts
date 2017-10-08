import * as layout from "../actions/layout";


export interface State {
  showNavBar: boolean;
  navBarContent: {[key: string]: string};
}

const initialState: State = {
  showNavBar: false,
  navBarContent: {}
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
    default:
      return state;
  }
}

export const getShowNavBar = (state: State): boolean => state.showNavBar;
export const getNavBarContent = (state: State): {[key: string]: string} => state.navBarContent;
