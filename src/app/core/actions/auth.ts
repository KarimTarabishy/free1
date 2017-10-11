import {Action} from "@ngrx/store";
import {User} from "../models/user";


export const SET_USER = "[core_auth] Set user";


export class SetUser implements Action {
  readonly type = SET_USER;
  constructor(public payload: User) {}
}


export type Actions = SetUser;
