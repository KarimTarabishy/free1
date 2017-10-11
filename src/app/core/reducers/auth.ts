import * as auth from "../actions/auth";
import {User} from "../models/user";

export interface State {
  currentUser: User;
}

export const initialState: State = {
  currentUser: null
};

export function reducer(state: State = initialState, action: auth.Actions ) {
  switch (action.type) {
    case auth.SET_USER:
      return {...state, currentUser: action.payload};
    default:
      return state;
  }
}



export const getCurrentUser = (state: State) => state.currentUser;
