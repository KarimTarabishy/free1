import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
} from '@ngrx/store';

import * as fromLayout from '../core/reducers/layout';
import * as fromAuth from '../core/reducers/auth';

export interface State {
  layout: fromLayout.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  auth: fromAuth.reducer
};



export const getLayoutState = createFeatureSelector<fromLayout.State>("layout");
export const getShowNavBar = createSelector( getLayoutState, fromLayout.getShowNavBar);
export const getNavBarContent = createSelector( getLayoutState, fromLayout.getNavBarContent);

export const getAuthState = createFeatureSelector<fromAuth.State>("auth");
export const getCurrentUser = createSelector(getAuthState, fromAuth.getCurrentUser);

