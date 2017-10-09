import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
} from '@ngrx/store';

import * as fromLayout from '../core/reducers/layout';

export interface State {
  layout: fromLayout.State;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer
};



export const getLayoutState = createFeatureSelector<fromLayout.State>("layout");
export const getShowNavBar = createSelector( getLayoutState, fromLayout.getShowNavBar);
export const getNavBarContent = createSelector( getLayoutState, fromLayout.getNavBarContent);

