import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {User} from "../models/user";


@Injectable()
export class AuthService {

  constructor() { }

  login(): Observable<User> {

  }
}
